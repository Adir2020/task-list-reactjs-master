import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export default function App() {
    const [tasks, setTask] = useState([]);

    const addTask = (task) => {
        setTask([...tasks, task]);
    };

    const deleteTask = index => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);

        setTask(newTasks);
    }

    return (
        <div className="App">
            <>
                <Form onSave={addTask} />
                <List tasks={tasks} deleteTask={deleteTask} />
            </>
        </div>
    );
}