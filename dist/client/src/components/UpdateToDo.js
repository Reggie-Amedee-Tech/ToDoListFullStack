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
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const UpdateToDo = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [status, setStatus] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        axios_1.default.get(`http://localhost:5000/api/${location.id}`)
            .then(res => {
            setName(res.data.toDo.name);
            setDescription(res.data.toDo.description);
            setStatus(res.data.toDo.status);
        })
            .catch(err => {
            console.log(err);
        });
    }, []);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios_1.default.put(`http://localhost:5000/api/edit-todo/${location.id}`, {
            name: name,
            description: description,
            status: status
        })
            .then(res => {
            console.log(res);
            navigate('/allTodos');
        })
            .catch(err => {
            console.log(err);
        });
    };
    return react_1.default.createElement("div", null,
        react_1.default.createElement("form", null,
            react_1.default.createElement("input", { type: "text", value: name, onChange: (e) => setName(e.target.value) }),
            react_1.default.createElement("input", { type: "text", value: description, onChange: (e) => setDescription(e.target.value) }),
            react_1.default.createElement("input", { type: "text", value: status, onChange: (e) => setStatus(e.target.value) }),
            react_1.default.createElement("button", { type: "submit", onClick: (e) => {
                    onSubmitHandler(e);
                } }, "Update ToDo")));
};
exports.default = UpdateToDo;
