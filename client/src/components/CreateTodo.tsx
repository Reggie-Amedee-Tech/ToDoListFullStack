import React, { useState, useRef } from "react";
import axios from "axios";
import '../styles/CreateToDo.css'

enum ProjectStatus {
    Started = 'Started',
}


const CreateTodo: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>(ProjectStatus.Started);

    const submitTodo = (event: React.FormEvent) => {
        event.preventDefault()
        setName(name)
        setDescription(description)
        setStatus(status)

        axios.post('http://localhost:5000/api/add-todo', {
            name: name,
            description: description,
            status: status
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.message)
        })

    }


    return <div className="Create-Component-Container">
        <div className="Form-Container">
        <form action="">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit" onClick={(e) => {
                submitTodo(e)
                setName('');
                setDescription('');
            }}>Submit Item</button>
        </form>
        </div>
    </div>
}

export default CreateTodo;