import React, {useState} from 'react'
import TodoPressenter from "./TodoPressenter";

const TodoContainer = () => {
    const [body, setbody] = useState("");

    const sendData = async() => {
        const res = await fetch("/api/todo", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        });

        const body = await res.json();
        
        setbody(body);
    
        if (!res.ok) {
            throw new Error(body.data.error.message);
        }
    }
    sendData();

    return (
        <TodoPressenter/>
    );
};

export default TodoContainer;