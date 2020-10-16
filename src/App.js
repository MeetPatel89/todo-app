import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import store from './store';



export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: store
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    
    
    
    const id = parseInt(e.target.id);
    
    this.setState(prevState => {
      
      const flippedArr = prevState.todos.map(item => {
        
        
        if(item.id === id) {
        
          return Object.assign({}, item, {completed: !item.completed})
          
        } 
        return item
      })
      console.log(this.state.todos);
      console.log(flippedArr);
      
      return {
        todos: flippedArr
      }
    })
    
    
    
  }
  

  render () {

    

    const todoItems = this.state.todos.map(todoItem => {
      /*
      return(
        todoItem.completed ?
        <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        checked={todoItem.completed}
        change={this.handleClick}
        style={{textDecoration: "line-through",
                fontStyle: "italic",
                color: "grey"}}
        /> :
      
       
        <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        checked={todoItem.completed}
        change={this.handleClick}
      
        />)
        */
       return (
        <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        checked={todoItem.completed}
        change={this.handleClick}
        
        />
       )
       
      }
      
    )
    return (

      
        <div className="flex-container">
      
          <form className="todo-list">
            {todoItems}
          </form>
    
        </div>
      
      
    )
    
  }
}