import {ADD_TASK, DELETE_TASK} from "../constants/constants";
const TASKS = [];


const tasks =(state=TASKS, {text, id, type, date})=>{
    switch (type) {
        case ADD_TASK:
            return[
                ...state,{
                id,
                text,
                date
                }
            ];
        case DELETE_TASK :
            return [...state].filter(task => task.id !== id);
        default:
            return state;
    }
}
export default tasks;