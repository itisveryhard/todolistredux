import React from "react";

const TodoInputDate=(value, onChange)=>(
        <input
            className='calendar'
            type="date"
            name="calendar"
            onChange={onChange}
            value={value}/>
);

export default TodoInputDate