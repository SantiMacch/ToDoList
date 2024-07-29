import React from "react";
import { useState } from "react";


function Todolist() {

    const [Tasks, setTasks] = useState([]);
    const [NewTasks, setNewTasks] = useState("");

    const handleChange = event => {
        setNewTasks(event.target.value);
    };
    const addTask = (e) => {
        e.preventDefault();
        setTasks([...Tasks, NewTasks]);
    };

    const removeTask = (event) => {
        Tasks.filter((tarea) => tarea === NewTasks);
    }



    return (
        <div>
            <form onSbumit={addTask}>
                <div>
                    <h1>Tareas</h1>
                    <input type="text" value={NewTasks} onChange={handleChange} />
                </div>
                <button onClick={addTask}>enviar formulario</button>
            </form>
            {Tasks.map(Tasks => (
                <li>{Tasks}<button onClick={removeTask}>borrar tarea</button></li>
            ))}
        </div>
    );
}



export default Todolist