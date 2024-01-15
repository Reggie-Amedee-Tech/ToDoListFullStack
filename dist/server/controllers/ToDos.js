"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneToDo = exports.deleteTodo = exports.updateTodo = exports.addToDos = exports.getAllTodos = void 0;
const ToDoModel_1 = __importDefault(require("../models/ToDoModel"));
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const toDos = yield ToDoModel_1.default.find();
        res.status(200).json({ toDos });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllTodos = getAllTodos;
const getOneToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneToDo = yield ToDoModel_1.default.findOne({ _id: req.params.id });
        console.log(oneToDo);
        res.status(201).json({ message: "ToDo Found", toDo: oneToDo });
    }
    catch (error) {
        res.status(500).json({ message: "Can't find todo with that id", error });
    }
});
exports.getOneToDo = getOneToDo;
const addToDos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new ToDoModel_1.default({
            name: body.name,
            description: body.description,
            status: body.status
        });
        const newToDo = yield todo.save();
        const allToDos = yield ToDoModel_1.default.find();
        res.status(201).json({ message: "ToDo Added!", toDo: newToDo, todos: allToDos });
    }
    catch (error) {
        res.status(500).json({ message: "Unable to add ToDo", error });
    }
});
exports.addToDos = addToDos;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield ToDoModel_1.default.findOneAndUpdate({ _id: id }, body);
        const allTodos = yield ToDoModel_1.default.find();
        res.status(200).json({ message: "Todo updated", todo: updateTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield ToDoModel_1.default.findByIdAndDelete(req.params.id);
        const allTodos = yield ToDoModel_1.default.find();
        res.status(200).json({ message: 'Todo Deleted', todo: deletedTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTodo = deleteTodo;
