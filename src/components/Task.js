import React, { Component } from 'react'

export class Task extends Component {

  render() {

  const {id,task} = this.props.task;
   
    return (
      <div>
         <div style={taskBox}>
         {task}
         <input type='submit' value='delete'  style={deleteButton} onClick={this.props.deleteTask.bind(this,id)}/>
         </div>
      </div>
    )
  }
}

let taskBox = {
  color:'#282c34',
  position: 'relative',
  left: '456px',
  padding: '6px 20px',
  width:'20%',
  marginBottom:'15px',
  backgroundColor:'white'
}

let deleteButton = {
  padding:'6px',
  border:'2px solid #282c34',
  backgroundColor:'#282c34',
  margin:'-5px 2px 15px 0px',
  float:'right',
  color:'white',
  outline:'none'
}
export default Task
