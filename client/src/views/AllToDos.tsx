import axios from "axios";
import React, { useEffect, useState } from "react";
import {AllToDosType} from '../types/AllToDosType'
import { Link } from "react-router-dom";

const AllToDos: React.FC = () => {
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

    console.log(allTodos)

    return <div>
        {allTodos.map(data => {
            return data.toDos.map(d => {
                return <div>
                    <Link to={d._id} state={{id: d._id}}>{d.name}</Link>
                </div>
            })
        })}

    </div>
}

export default AllToDos;