import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import {addTask, deleteTask} from '../actions/AddTask'

class Todo extends Component{
    state ={
        taskText:'',
    }

changeUserInput =({target: {value}})=>{
        this.setState({
            taskText: value,
        })
}
addTask = () =>{
        const {taskText} = this.state;
        const {addTask}= this.props;
        addTask((new Date()).getTime(), taskText);

        this.setState({
            taskText: '',
        })
}

    render() {
        const {taskText} = this.state;
        const {tasks, deleteTask} = this.props;

        return(
            <div >
                <p> Список ваших задач </p>
                <TodoList taskList={tasks} deleteTask={deleteTask}/>
                <TodoInput
                    onChange={this.changeUserInput}
                    value={taskText}
                    onClick={()=>this.addTask(this.state.taskText)}
                />
            </div>
                );
        }
}

export default connect(state=>({
    tasks: state.tasks,
}),{addTask, deleteTask})(Todo);


