import React from 'react';
import './TodoCard.css';
import PropTypes from 'prop-types';
import { GrDocumentUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

const TodoCard = ({ todo, onDelete, onEdit }) => {
    return (
        <div className="todo-card">
            <div className="todo-content">
                <h4>{todo.title}</h4>
                <p>{todo.body}</p>
            </div>
            <div className="todo-icons">
                <GrDocumentUpdate className="icon" onClick={onEdit} />
                <AiFillDelete className="icon" onClick={onDelete} />
            </div>
        </div>
    );
};

TodoCard.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default TodoCard;
