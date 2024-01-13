"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToDos_1 = require("../controllers/ToDos");
const router = (0, express_1.Router)();
router.get('/all-todos', ToDos_1.getAllTodos);
router.post('/add-todo', ToDos_1.addToDos);
router.put('/edit-todo/:id', ToDos_1.updateTodo);
router.delete('/delete-todo/:id', ToDos_1.deleteTodo);
exports.default = router;
