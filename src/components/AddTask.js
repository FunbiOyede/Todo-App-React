import React, { Component } from 'react'


export class AddTask extends Component {

 state = {
     task:''
 }


 onChange = (e) =>{
     this.setState({
        task: e.target.value
    })
 }

 onSubmit = (e) =>{
    e.preventDefault();
    this.props.addNewTask(this.state.task);
// clear input
    this.setState({task:''})
  }

  render() {
    return (
         <form style={taskContainer} onSubmit={this.onSubmit}>
           <input type='text' value={this.state.task}  style={inputStyle} placeholder='enter task'onChange={this.onChange} />
           <input type='submit' value='add task' style={button} />
         </form>
    )
  }
}


let taskContainer = {
    margin:'0 auto',
    backgroundColor:'transparent',
    borderColor:'2px solid #282c34',
    width:'50%',
    height:'50%'

}
 let inputStyle = {
    outline:'none',
    color: 'black',
    width:'46%',
    height:'12%',
    marginTop:'20px',
    padding:'3px 10px',
    backgroundColor:'white'
 }

 let button = {
     color:'#282c34',
     boxSizing:'border-box',
     backgroundColor:'white',
     outline:'none',
     border:'2px solid #282c34',
     marginLeft:'20px',
     padding:'12px 20px'
 }

export default AddTask

