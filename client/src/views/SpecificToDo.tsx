import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SpecificToDo } from "../types/SpecificToDoType";

const ProjectStatus = ['Started', 'In Progress', 'Completed']



const SelectedToDo: React.FC = props => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [selectedToDo, setSelectedToDo] = useState<SpecificToDo[]>([]);
    const [status, setStatus] = useState<string>("");
    const location = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/${location.id}`)
        .then(res => {
            setSelectedToDo([res.data.toDo])
            setStatus(res.data.toDo.status)
            setLoading(true)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    const deleteTodo = (event: React.FormEvent) => {
        event.preventDefault();

        axios.delete(`http://localhost:5000/api/delete-todo/${location.id}`)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const changeStatus = (event: React.FormEvent) => {
        event.preventDefault();
        
        axios.put(`http://localhost:5000/api/edit-todo/${location.id}`, {
            status: status
        })
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    console.log(status)

    return <div>
        {!loading ? <p>Loading...</p> : <div>
            {selectedToDo.map(data => {
                return <div>
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>
                    <h3>{data.status}</h3>
                    <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>{ProjectStatus.map((d: string, i: number) => {
                        return <option key={i}>{d}</option>
                    })}</select>
                    <Link to={"edit"}>Edit</Link>
                    <button onClick={(e) => {
                        deleteTodo(e)
                    }}>Delete Button</button>
                    <button onClick={(e) => {
                        changeStatus(e)
                    }}>UpdateStatus</button>
                </div>
            })}
            </div>}
        
    </div>
}

export default SelectedToDo