import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/routes'

require('dotenv').config()

const app: Express = express();
const PORT = process.env.REACT_APP_PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use('/api', routes);

const uri: string = process.env.REACT_APP_API_KEY;

mongoose.connect(uri)
.then(() => {
    console.log(`${uri} is connected!`)
})
.catch(err => {
    console.log("Did not connect database")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

