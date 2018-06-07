import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class ToDoList extends React.Component{
    constructor()
    {
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.state={
            tasks:[
{
    name:"rehan",
    completed:false

},
{
    name:"muddabir",
    completed:false
},
{
    name:"zain",
    completed:false
}

            ]
        }
    }
    changeStatus(index){
        var tasks = this.state.tasks;
        var task =tasks[index];
        task.completed =!task.completed;
        this.setState(
            {
                tasks:tasks
            }
        )

    }
    render()
    {
        
        return(
            <ul>
            {

        this.state.tasks.map( (task,index) =>  {
            return <ToDoItem key={task.name} clickHandler={this.changeStatus} index={index} detail={task}/>
            
        })
    }
                
            </ul>
        )
}
}
class ToDoItem extends React.Component{
render(){
return(
<li onClick={()=>{
    this.props.clickHandler(this.props.index);
}} className ={this.props.detail.completed?'compeleted':'red'} >
    {this.props.detail.name}
</li>
)
}
}
ReactDOM.render(<ToDoList/>,document.getElementById("root"))