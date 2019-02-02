import React from "react";
import axios from "axios";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
  }
  fetchTodos() {
    axios
      .get("/api/groceryList")
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/groceryList", { todo: this.state.todo })
      .then(() => {
        this.fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
    document.getElementById("form").reset();
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form id="form" onSubmit={e => this.handleSubmit(e)}>
          Todo: <input type="text" name="todo" onKeyUp={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default List;
