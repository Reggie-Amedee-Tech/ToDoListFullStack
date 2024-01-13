import React, { useState, useRef } from "react";
import axios from "axios";


const CreateTodo: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("");


    const submitTodo = (event: React.FormEvent) => {
        event.preventDefault()
        setName(name)
        setDescription(description)
        setStatus(status)
        console.log(name, description, status)

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


    return <div>
        <form action="">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)}/>
            <button type="submit" onClick={(e) => {
                submitTodo(e)
                setName('');
                setDescription('');
                setStatus('');
            }}>Submit Item</button>
        </form>
    </div>
}

export default CreateTodo;