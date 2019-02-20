import React from 'react';
import PropTypes from 'prop-types';
import TodoInputDate from './TodoInputDate'

const TodoInput=({value, onChange, onClick})=>(
    <div className='containerTask'>
        <input
            className='task-input'
            onChange={onChange}
            value={value}
            type="text"
            placeholder={"Добавьте новую задачу"}/>
            <button
                className='add__btn'
                onClick={onClick}
            >
                Добавить
            </button>
    </div>
);

TodoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}

TodoInput.defaultProps ={
    onChange: ()=>{},
    value:'',
}

export default TodoInput;