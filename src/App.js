import React from "react";
import "./styles.css";
import todos from "./todoData";
import TodoItem from "./TodoItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TodoList: todos
    };
    //WE ARE USING ARROW FUNCN IN HANDLE CHANGE line 17
    //SO WE DON't hVE TO BIND LIKE THIS IN LINE 14
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (todo) => {
    const { TodoList } = this.state;

    const index = todos.indexOf(todo);

    TodoList[index].completed = !TodoList[index].completed;

    this.setState({
      todo
    });
  };

  render() {
    const { TodoList } = this.state;
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {TodoList.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              handleClick={this.handleChange}
              key={todo.id}
            />
          );
        })}
        {/* <TodoItem /> */}
      </div>
    );
  }
}

export default App;
