// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//this receives the array, and creates a new <Todo /> from each item in the array


    // <div>
    // {
            
    //     this.state.todoData.map(itemFromMap => (
    //       <Todo todoOnProps = {itemFromMap} />
    //     ))
      
    // }
    // </div>

import React from 'react';
// import {todoArr} from './TodoData';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className = 'list'>
            {props.todoData.map(item => {
                return(
                    <Todo
                        key = {item.id}
                        toggleItem={props.toggleItem}
                        item={item}
                    />
                );
            })}
        </div>

    )
}

// class TodoList extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//           todoData: todoArr,
         
//         }
    
    
//       }

// render(){
//     return(
//         <div>
//         {
            
//             this.state.todoData.map(itemFromMap => (
//               <Todo todoOnProps = {itemFromMap} />
//             ))
          
//         }
//         </div>
//     );
// }

// }

export default TodoList;

