import React, { useState } from 'react';
import './Todo.css'; // Import CSS file for styling
import TodoCard from './TodoCard';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Todo = () => {
    const [todos, setTodos] = useState([]); // State to store todos
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { title, body }; // Create a new todo object
        setTodos([...todos, newTodo]); // Add the new todo to the todos array
        setTitle(''); // Clear title input
        setBody(''); // Clear body input
    };
    return (
        <div className="todo-container">
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={body}
                        onChange={handleBodyChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Add Todo</button>
            </form>

            {/* Display todos */}
            {/* Display todos */}
            <div className="todo-list">
                <h3>Todo List</h3>
                {todos && todos.map((todo, index) => (
                     <TodoCard key={index} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default Todo;
