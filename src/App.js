import React from 'react';
import{todoArr} from './components/TodoComponents/TodoData';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


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
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
        {
            
            this.state.todoData.map(itemFromMap => (
              <Todo todoOnProps = {itemFromMap} />
            ))
          
        }
        </div>
        
        
        <TodoForm addTodo = {this.addTodo} onChange  = {this.handleChanges} value = {this.state.task}  /> 
          

      </div>
    );
  }
}

export default App;

// <TodoForm addTodo = {this.addTodo} onChange  = {this.handleChanges} value = {this.state.task}  /> 
// onChange = {this.handleChanges} this is putting the function handleChanges into onChange. Thus we need to call 
// onChange = {props.onChange} in the form.js