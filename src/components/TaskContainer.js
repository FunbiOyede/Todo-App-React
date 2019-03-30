import React, { Component } from 'react'

import Task from './Task';

export class TaskContainer extends Component {


  
  render() {
    let todoGroup = this.props.taskList.map((task)=>{
      return(
        <Task key={task.id} task={task} deleteTask={this.props.deleteTask}/>
      )     
    })

    return (
      <div style={bodyStyle}>
        {todoGroup}
      </div>
    )
  }
}

let bodyStyle ={
  color:'white',
  backgroundColor:' #282c34',
  marginTop:'-200px'
}

export default TaskContainer;
