import React, { useState } from 'react';
import "./TodoUpdate.css"
const TodoUpdate = () => {
    return (
        <>
            <div className='conatiner'>
                <h3>Update Task</h3>
                <input type="text" className='todo-input' />
                <textarea className='todo-input' />
                <button className='btn'>Upadte</button>
            </div>
            
        </>
    )
}
export default TodoUpdate;
