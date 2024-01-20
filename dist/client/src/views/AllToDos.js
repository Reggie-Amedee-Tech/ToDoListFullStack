"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InProgress_1 = __importDefault(require("./InProgress"));
const StartedToDo_1 = __importDefault(require("./StartedToDo"));
require("../styles/AllTodos.css");
const AllTodos = () => {
    return React.createElement("div", { className: 'Alltodos-container' },
        React.createElement("div", { className: 'todos-container' },
            React.createElement(InProgress_1.default, null),
            React.createElement(StartedToDo_1.default, null)));
};
exports.default = AllTodos;
