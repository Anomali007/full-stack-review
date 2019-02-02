import React from "react";
import axios from "axios";
import ListEntry from "./ListEntry";

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
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos() {
    axios
      .get("/api/groceryList")
      .then(data => {
        this.setState({
          todos: data.data
        });
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
  deleteTodo(id) {
    axios
      .delete("/api/groceryList", { params: { id } })
      .then(() => {
        this.fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form id="form" onSubmit={e => this.handleSubmit(e)}>
          Todo: <input type="text" name="todo" onKeyUp={this.handleInput} />
        </form>
        {this.state.todos.map(entry => (
          <ListEntry entry={entry} deleteTodo={this.deleteTodo} />
        ))}
      </div>
    );
  }
}

export default List;
