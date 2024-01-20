import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const UpdateToDo: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const navigate = useNavigate();

    const location = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/${location.id}`)
        .then(res => {
            setName(res.data.toDo.name)
            setDescription(res.data.toDo.description)
        })
        .catch( err => {
            console.log(err)
        })
    }, [])

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        axios.put(`http://localhost:5000/api/edit-todo/${location.id}`, {
            name: name,
            description: description,
            
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }



    return <div>
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            
            <button type="submit" onClick={(e) => {
                onSubmitHandler(e)
            }}>Update ToDo</button>
        </form>

    </div>
}

export default UpdateToDo;