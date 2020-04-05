import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todoa.map(todo => (
      <TodoItem
        key={todo.id}
        tots={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todoa: PropTypes.array.isRequired
};
export default Todos;
