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
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const SelectedToDo = props => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [selectedToDo, setSelectedToDo] = (0, react_1.useState)([]);
    const location = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        axios_1.default.get(`http://localhost:5000/api/${location.id}`)
            .then(res => {
            setSelectedToDo([res.data.toDo]);
            setLoading(true);
        })
            .catch(err => {
            console.log(err.message);
        });
    }, []);
    const deleteTodo = (event) => {
        event.preventDefault();
        axios_1.default.delete(`http://localhost:5000/api/delete-todo/${location.id}`)
            .then(res => {
            console.log(res);
            navigate('/allTodos');
        })
            .catch(err => {
            console.log(err);
        });
    };
    console.log(selectedToDo, location);
    return react_1.default.createElement("div", null, !loading ? react_1.default.createElement("p", null, "Loading...") : react_1.default.createElement("div", null, selectedToDo.map(data => {
        return react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, data.name),
            react_1.default.createElement("h2", null, data.description),
            react_1.default.createElement("h3", null, data.status),
            react_1.default.createElement(react_router_dom_1.Link, { to: "edit" }, "Edit"),
            react_1.default.createElement("button", { onClick: (e) => {
                    deleteTodo(e);
                } }, "Delete Button"));
    })));
};
exports.default = SelectedToDo;
