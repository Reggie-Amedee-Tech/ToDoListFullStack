"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = __importStar(require("react"));
const AllToDos = () => {
    const [allTodos, setAllTodos] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default.get('http://localhost:5000/api/all-todos')
            .then(res => {
            console.log(res.data);
            setAllTodos([res.data]);
        })
            .catch(err => {
            console.log(err.message);
        });
    }, []);
    console.log(allTodos);
    return react_1.default.createElement("div", null, allTodos.map(data => {
        return data.toDos.map(d => {
            return react_1.default.createElement("div", null,
                react_1.default.createElement("p", null, d.name),
                react_1.default.createElement("p", null, d.description),
                react_1.default.createElement("p", null, d.status));
        });
    }));
};
exports.default = AllToDos;