import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList=({taskList, deleteTask})=>(
    <ol className="taskssss">
        {taskList.map(({id,text})=>(
            <TodoItem deleteTask={deleteTask} id={id} key={id} text={text}/>
        ))}
    </ol>
);

TodoList.propTypes ={
    taskList: PropTypes.array,
}

TodoList.defaultProps ={
    taskList: [],
}

export default TodoList;
