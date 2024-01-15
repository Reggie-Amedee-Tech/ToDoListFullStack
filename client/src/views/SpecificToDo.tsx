import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { SpecificToDo } from "../types/SpecificToDoType";



const SelectedToDo: React.FC = props => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [selectedToDo, setSelectedToDo] = useState<SpecificToDo[]>([]);
    const location = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/${location.id}`)
        .then(res => {
            setSelectedToDo([res.data.toDo])
            setLoading(true)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    console.log(selectedToDo)

    return <div>
        {!loading ? <p>Loading...</p> : <div>
            {selectedToDo.map(data => {
                return <div>
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>
                    <h3>{data.status}</h3>
                    <Link to={"edit"}>Edit</Link>
                </div>
            })}
            </div>}
        
    </div>
}

export default SelectedToDo