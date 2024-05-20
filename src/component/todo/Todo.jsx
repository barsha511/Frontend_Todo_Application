import React, { useState } from 'react';
import './Todo.css'; // Import CSS file for styling
import TodoCard from './TodoCard';
import TodoUpdate from './TodoUpdate';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedTodos = todos.map((todo, index) =>
                index === editIndex ? { ...todo, title, body } : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null);
        } else {
            const newTodo = { title, body };
            setTodos([...todos, newTodo]);
        }
        setTitle('');
        setBody('');
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(updatedTodos);
    };

    const handleEditClick = (index) => {
        const todoToEdit = todos[index];
        setTitle(todoToEdit.title);
        setBody(todoToEdit.body);
        setEditIndex(index);
    };

    const handleCancelClick = () => {
        setTitle('');
        setBody('');
        setEditIndex(null);
    };

    return (
        <div className="todo-container">
            <h2>{editIndex !== null ? 'Update Todo' : 'Add Todo'}</h2>
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
                <button type="submit">{editIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
                {editIndex !== null && <button type="button" onClick={handleCancelClick} style={{ marginTop: '10px' }}>Cancel</button>}
            </form>

            <div className="todo-list">
                <h3>Todo List</h3>
                {todos && todos.map((todo, index) => (
                    <TodoCard 
                        key={index} 
                        setTodos={setTodos} 
                        todos={todos} 
                        todo={todo}
                        onDelete={() => handleDelete(index)}
                        onEdit={() => handleEditClick(index)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Todo;
