import React, { Component } from "react";
import Todos from "./Todos";
import Addtodo from "./Addtodo"

import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy come milk" },
      { id: 2, content: "play maio game , yayyyy" },
    ],
  };


  addTodo = (todo) => {

    todo.id = Math.random() ;
    let todos = [...this.state.todos, todo];

    this.setState({
      todos : todos 
    })

  }

  deleteTodo = (id) => {
    const todo = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      todos:todo 
    }) ; 


  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
