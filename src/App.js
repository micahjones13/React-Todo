import React from 'react';
import{todoArr} from './components/TodoComponents/TodoData';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoData: todoArr,
      // todoItem: '',
      task: '',
      id: '',
     
    }


  }

  //method to add a todo item to list
  addTodo = event => {
    event.preventDefault();
    const newItem = {
      // todoItem: this.state.todoItem,
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
      this.setState({
        todoData: [...this.state.todoData, newItem]
        
      })
     
  }
  
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value  
      // task: event.target.value
    })
  }
  
  toggleItem = id => {
    //loop through this.state.todoData
    //find the item that was clicked 
    //toggle the completed prop

    //
    this.setState(prevState => {
      return {
        //map through todoData
        todoData: prevState.todoData.map (item => {
          //if the current item id === the id of the item clicked, return the item but have the completed prop be true
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
            //if the id doesn't match, then don't do anything to the current item
          } else {
            return item;
          }
        })
      };
    });

  };

  removeComplete = (event) => {
    //prevent the button from acting like a dumb button and refreshing
    event.preventDefault();
    //remove any Todo that has a completed status of true or false apparently?
    //set state using prevState
    this.setState(prevState => {
      return {
        //filter through todoData(the array that holds all items)
        todoData: prevState.todoData.filter(item => {
          //if the current item has a complted bool value of true, set it's task to null, thus not displaying anything
          //remember, the default of completed is false. so !item.completed means if the item.completed is opposite of false, thus true
          if (!item.completed){
            return{
              //use spread operator to keep the array intact, just add onto it
              ...item,
              task: null
            };
          } 
        })
      }
    })

  }

  render() {
    return (
      <div className = 'container'>
        <h1>Welcome to your Todo App!</h1>
        <div className = 'todo-container'>
        <TodoList 
          todoData = {this.state.todoData}
          toggleItem = {this.toggleItem}
        />
        </div>
        
        
        <TodoForm 
          addTodo = {this.addTodo} 
          onChange  = {this.handleChanges} 
          value = {this.state.task} 
          removeComplete ={this.removeComplete} 
         /> 
          

      </div>
    );
  }
}

export default App;

// <TodoForm addTodo = {this.addTodo} onChange  = {this.handleChanges} value = {this.state.task}  /> 
// onChange = {this.handleChanges} this is putting the function handleChanges into onChange. Thus we need to call 
// onChange = {props.onChange} in the form.js