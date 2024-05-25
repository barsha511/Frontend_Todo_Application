import React, { useEffect, useState } from 'react';
import './Todo.css'; // Import CSS file for styling
import TodoCard from './TodoCard';
import axios from 'axios';

const Todo = () => {
    let id = sessionStorage.getItem('id');
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedBody, setUpdatedBody] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleUpdatedTitleChange = (e) => {
        setUpdatedTitle(e.target.value);
    };

    const handleUpdatedBodyChange = (e) => {
        setUpdatedBody(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editIndex !== null) {
            try {
                const response = await axios.put(`http://localhost:1000/api/v2/UpdateTodo/${editIndex}`, {
                    title: updatedTitle,
                    body: updatedBody,
                });
                console.log('Update Todo response:', response.data);

                // Update the todos list with the updated todo
                const updatedTodos = todos.map((todo) =>
                    todo._id === editIndex ? response.data.updatedList : todo
                );
                setTodos(updatedTodos);
                setEditIndex(null);
                setUpdatedTitle('');
                setUpdatedBody('');
            } catch (error) {
                console.error('Error updating todo:', error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:1000/api/v2/AddTodo', {
                    title: title,
                    body: body,
                    id: id
                });
                console.log('Add Todo response:', response.data);
                const newTodo = { ...response.data, title, body };
                setTodos([...todos, newTodo]);
                setTitle('');
                setBody('');
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        }
    };

    const handleDelete = async (Carid) => {
        try {
            const response = await axios.delete(`http://localhost:1000/api/v2/DeleteTodo/${Carid}`, {
                data: { id: id }
            });
            console.log('Delete Todo response:', response.data);
            const updatedTodos = todos.filter((todo) => todo._id !== Carid);
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleEditClick = (todoId) => {
        const todoToEdit = todos.find(todo => todo._id === todoId);
        setUpdatedTitle(todoToEdit.title);
        setUpdatedBody(todoToEdit.body);
        setEditIndex(todoId);
    };

    const handleCancelClick = () => {
        setTitle('');
        setBody('');
        setUpdatedTitle('');
        setUpdatedBody('');
        setEditIndex(null);
    };

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`http://localhost:1000/api/v2/ReadList/${id}`);
                console.log('Fetch Todos response:', response.data);
                setTodos(response.data.list);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        fetchTodos();
    }, [id]);

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
                        value={editIndex !== null ? updatedTitle : title}
                        onChange={editIndex !== null ? handleUpdatedTitleChange : handleTitleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={editIndex !== null ? updatedBody : body}
                        onChange={editIndex !== null ? handleUpdatedBodyChange : handleBodyChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">{editIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
                {editIndex !== null && <button type="button" onClick={handleCancelClick} style={{ marginTop: '10px' }}>Cancel</button>}
            </form>

            <div className="todo-list">
                <h3>Todo List</h3>
                {todos && todos.map((todo) => (
                    <TodoCard 
                        key={todo._id} 
                        todo={todo}
                        onDelete={() => handleDelete(todo._id)}
                        onEdit={() => handleEditClick(todo._id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
