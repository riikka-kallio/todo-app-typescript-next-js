"use client";
import { useState, useEffect } from 'react';

interface Todo {
    _id: string;
    text: string;
    completed: boolean;
}

export default function ToDoList() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const[task, setTask] = useState("");

    //Fetch all todos
    const fetchTodos = async () => {
        const res = await fetch("/api/todos");
        const data = await res.json();
        setTodos(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTodos();
    };
    fetchData();
  }, []);

    // Create a new todo
    const addTodo = async () => {
        if (!task.trim()) return;
        await fetch("api/todos", {
            method: "POST",
            body: JSON.stringify({ text: task }),
        });

        setTask("");
        fetchTodos(); // Refresh the list
    };

    // Toggle completed
    const toggleTodo = async (id: string) => {
        await fetch (`/api/todos/${id}`, { method: "PATCH" });
        fetchTodos();
    };

  //  Delete a todo

    const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

    
    return (
        <div>
            <h1>Todo App</h1>

            <div>
                <input
                className=""
                placeholder='Add New Task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
                <button
                    onClick={addTodo}
                    className=""
                >
                    Add
                </button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo._id}
                        className=""
                        >
                    <span
                        onClick={() => toggleTodo(todo._id)}
                        className={`cursor-pointer ${
                            todo.completed ? "line-through text-gray-500" : ""
                        }`}
                        >
                        {todo.text}
                    </span>
                    <button
                        onClick={() => deleteTodo(todo._id)}
                        className="text-red-500"
                        >
                        X
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}