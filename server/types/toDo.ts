import { Document } from "mongoose";

export interface ToDo extends Document {
    name: string;
    description: string;
    status: string;
}