import React, { Component } from 'react';
import AddTask from './components/AddTask';
import './App.css';
import TaskContainer from './components/TaskContainer';

class App extends Component {

  state = {
    taskList:[
      {
        id:1,
        task:'Learn kurbenetes'
      }
    ]
  }


  //deleting tasks
  deleteTask = (id) =>{
   this.setState({
     taskList:[...this.state.taskList.filter(task => task.id !== id)]
   })
  }

  addNewTask = (task) =>{

    // generating new id
    let num= Math.floor(Math.random()*20)

    let newTask = {
      id:num,
      task:task
    }

    // adding new tasks to the taskList array in the state
  this.setState({
    taskList: [...this.state.taskList,newTask]
  });
  }

  render() {
    return (
      <div className="App">
        <AddTask  addNewTask={this.addNewTask} />
        <TaskContainer taskList={this.state.taskList} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
