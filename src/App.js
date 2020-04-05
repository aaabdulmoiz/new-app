import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import Add, { Addtodo } from "./components/Add";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Kaafi jaldi shuru kia",
        completed: false,
      },
      {
        id: 2,
        title: "Kaafi late shuru kia",
        completed: false,
      },
      {
        id: 3,
        title: "Kaafi darmiyan shuru kia",
        completed: false,
      },
    ],
  };
  //toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Addtodo />
          <Todos
            todoa={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
