import { Request, Response } from "express";
import {ToDo} from '../types/toDo';
import ToDoModel from "../models/ToDoModel";

const getAllTodos = async(req: Request, res: Response): Promise<void> => {
    try{
        const toDos: ToDo[] = await ToDoModel.find();
        res.status(200).json({toDos})
    }
    catch (error) {
        throw error
    }
}

const addToDos = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ToDo, 'name' | 'description' | 'status'>
        const todo: ToDo = new ToDoModel({
            name: body.name,
            description: body.description,
            status: body.status
        })

        const newToDo: ToDo = await todo.save();
        const allToDos: ToDo[] = await ToDoModel.find();
        res.status(201).json({message: "ToDo Added!", toDo: newToDo, todos: allToDos})
    }
    catch(error) {
        res.status(500).json({message: "Unable to add ToDo", error})
    }
}

const updateTodo = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: {id},
            body,
        } = req;

        const updateTodo: ToDo | null = await ToDoModel.findOneAndUpdate(
            {_id: id},
            body
        )
        const allTodos: ToDo[] = await ToDoModel.find()
        res.status(200).json({message: "Todo updated", todo: updateTodo, todos: allTodos})
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: ToDo | null = await ToDoModel.findByIdAndDelete(req.params.id);
        const allTodos = await ToDoModel.find();
        res.status(200).json({message: 'Todo Deleted', todo: deletedTodo, todos: allTodos})

    } catch (error) {
        throw error
    }
}

export {getAllTodos, addToDos, updateTodo, deleteTodo}