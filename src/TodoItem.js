import React from "react";

class TodoItem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     id: 1,
  //     text: "My Task",
  //     completed: true
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  // handleChange() {
  //   this.setState((prevState) => {
  //     return { completed: !prevState.completed };
  //   });
  // }
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.todo.handleClick(this.props.todo)}
        />
        <label> {this.props.todo.text} </label>
      </div>
      // OR WE COULD HAVE USED DECONSTRUCTION
      //   render() {
      // const { text, completed } = this.props.todo;
      // return (
      //   <div className="todo-item">
      //     <input
      //       type="checkbox"
      //       checked={completed}
      //       onChange={() =>
      //         this.props.handleClick(this.props.todo)}
      //     />
      //     <label> {text} </label>
      //   </div>
    );
  }
}

export default TodoItem;
