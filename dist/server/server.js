"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.REACT_APP_PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api', routes_1.default);
const uri = (_a = process.env.REACT_APP_API_KEY) !== null && _a !== void 0 ? _a : 'API KEY NOT FOUND';
mongoose_1.default.connect(uri)
    .then(() => {
    console.log(`${uri} is connected!`);
})
    .catch(err => {
    console.log("Did not connect database");
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
