"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["Started"] = "Started";
    ProjectStatus["InProgress"] = "In Progress";
    ProjectStatus["Completed"] = "Completed";
})(ProjectStatus || (ProjectStatus = {}));
const ToDoSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('ToDoModel', ToDoSchema);
