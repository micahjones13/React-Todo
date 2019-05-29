import React from 'react';




// class TodoForm extends React.Component {

//     // <div>
//     //     <form onSubmit = {this.addTodo}>
//     //         <input placeholder = 'Todo' onChange = {this.handleChanges} value = {this.state.task} name = 'task'></input>
//     //         <button onClick = {this.props.addTodo}>Add Todo</button>
//     //         <button>Clear Completed</button>
//     //     </form>
//     // </div>

//     render(){
//         return(
//         <div>
//             <form onSubmit = {this.addTodo}>
//                 <input placeholder = 'Todo' onChange = {this.props.handleChanges} value = {this.props.task} name = 'task'></input>
//                 <button onClick = {this.props.addTodo}>Add Todo</button>
//                 <button>Clear Completed</button>
//             </form>
//         </div>

//         );

//     }

// }

const TodoForm = (props) => {
    return (
        <div>
         <form onSubmit = {props.addTodo}>
           <input placeholder = 'Todo' onChange = {props.onChange} value = {props.task} name = 'task'></input>
             <button onClick = {props.addTodo}>Add Todo</button>
             <button>Clear Completed</button>
      </form>
    </div>

    );
}

export default TodoForm;