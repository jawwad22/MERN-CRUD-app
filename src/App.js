import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Component 
import TodosList from "./components/todos-list-component";
import EditTodo from "./components/edit-todos-component";
import CreateTodo from "./components/create-todo-component"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="" className="navbar-brand">
        {/* //logo here */}
        <Link to="/" className="navbar-brand">MERN Stack Todo App</Link>
      </a>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
