import React from 'react'; 
import { useState } from 'react';

export default function Form( props ) {
    const { onSave } = props;
    const [text, setText] = useState('');

    return (
        <div>
            <form id="todo-form">
                <label>Task List</label>
                <input type="text" onChange={ e => setText(e.currentTarget.value) }/>
                
                <button type="button" onClick={() => onSave(text) }>
                    Save
                </button>
            </form>
        </div>
    );
}