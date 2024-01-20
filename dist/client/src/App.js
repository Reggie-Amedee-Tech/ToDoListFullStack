"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CreateTodo_1 = __importDefault(require("./components/CreateTodo"));
const AllTodos_1 = __importDefault(require("./views/AllTodos"));
const SpecificToDo_1 = __importDefault(require("./views/SpecificToDo"));
const UpdateToDo_1 = __importDefault(require("./components/UpdateToDo"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(CreateTodo_1.default, null),
                    react_1.default.createElement(AllTodos_1.default, null)) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/:id', element: react_1.default.createElement(SpecificToDo_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/:id/edit', element: react_1.default.createElement(UpdateToDo_1.default, null) })));
};
exports.default = App;
