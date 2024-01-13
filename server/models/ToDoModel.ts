
import {model, Schema} from 'mongoose';

const ToDoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default model('ToDoModel', ToDoSchema)

