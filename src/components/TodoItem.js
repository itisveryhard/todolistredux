import React from 'react';
import PropTypes from 'prop-types'
import Timer from './Timer'

const TodoItem =({text, deleteTask, id})=>(
    <li className="tasks">
        Цель: {text}
        <button
            onClick={()=>deleteTask(id)}
            className='delete__btn'
        >
            Удалить
        </button>
        <Timer/>
    </li>
);

TodoItem.propTypes ={
    text: PropTypes.string,
}

TodoItem.defaultProps ={
    text:'',
}

export default TodoItem;
