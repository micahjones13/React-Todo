import React from 'react';


//takes in todo data and displays the task to the screen
class Todo extends React.Component {


    render(){
        return(
            <div className = 'todo-items'>
                <p>{this.props.todoOnProps.task}</p>
            
            </div>

        );

    }


}

export default Todo;