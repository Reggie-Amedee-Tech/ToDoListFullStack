import axios from "axios";
import React, { useEffect, useState } from "react";
import {AllToDosType} from '../types/AllToDosType'
import { Link } from "react-router-dom";

const SpecificToDo: React.FC = () => {
    const [allTodos, setAllTodos] = useState<AllToDosType[]>([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/all-todos')
        .then(res => {
            console.log(res.data)
            setAllTodos([res.data])
            
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])



    return <div>
        {allTodos.map(data => {
            return data.toDos.filter(d => d.status === "Started").map(filteredTodo => {
                    return <div>
                        <Link to={filteredTodo._id} state={{id: filteredTodo._id}}>{filteredTodo.name}</Link>
                    </div>
                
            })
        })}

    </div>
}

export default SpecificToDo;