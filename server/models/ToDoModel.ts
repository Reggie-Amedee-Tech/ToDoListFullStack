
import {model, Schema} from 'mongoose';

enum ProjectStatus {
    Started = 'Started',
    InProgress = "In Progress",
    Completed = "Completed"
}

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
        enum: [ProjectStatus.Started, ProjectStatus.InProgress, ProjectStatus.Completed],
        required: true
    }
}, {timestamps: true})

export default model('ToDoModel', ToDoSchema)

