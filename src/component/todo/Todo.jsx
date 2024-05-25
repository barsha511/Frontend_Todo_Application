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

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editIndex !== null) {
            const updatedTodos = todos.map((todo, index) =>
                index === editIndex ? { ...todo, title, body } : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null);
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
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        }
        setTitle('');
        setBody('');
    };

    const handleDelete = async (Carid) => {
        try {
            const response = await axios.delete(`http://localhost:1000/api/v2/DeleteTodo/${Carid}`, {
                data: { id: id }
            });
            console.log('Delete Todo response:', response.data);

            // Ensure the correct filtering logic
            
            console.log(Carid)
            const updatedTodos = todos.filter((todo) => todo._id !== Carid);
            setTodos(updatedTodos);
            
            console.log('Updated Todos after deletion:', updatedTodos);
            
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
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
                        key={todo._id} 
                        todo={todo}
                        onDelete={() => handleDelete(todo._id)}
                        onEdit={() => handleEditClick(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
