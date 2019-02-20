import {ADD_TASK, DELETE_TASK} from "../constants/constants";

export const addTask = (id, text, date) =>({
    type: ADD_TASK,
    id,
    text,
    date
});

export const deleteTask = id =>({
    type: DELETE_TASK,
    id,
});