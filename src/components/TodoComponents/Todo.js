import React from 'react';


//takes in todo data and displays the task to the screen
const Todo = (props) => {


    
        return(
            <div className = {`todo-item${props.item.completed ? ' completed' : ''}`} 
                onClick = {() => props.toggleItem(props.item.id)}
            >
                <p>{props.item.task}</p>
            
            </div>

        );

    


}

export default Todo;



// class Todo extends React.Component {


//     render(){
//         return(
//             <div className = 'todo-items'>
//                 <p>{this.props.todoOnProps.task}</p>
            
//             </div>

//         );

//     }


// }