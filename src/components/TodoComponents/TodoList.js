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
import {todoArr} from './TodoData';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {
          todoData: todoArr,
         
        }
    
    
      }

render(){
    return(
        <div>
        {
            
            this.state.todoData.map(itemFromMap => (
              <Todo todoOnProps = {itemFromMap} />
            ))
          
        }
        </div>
    );
}

}

export default TodoList;

