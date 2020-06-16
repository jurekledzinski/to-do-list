import React, { Component, Fragment } from "react";
import "../styles/App.css";
import Form from "../components/Form";
import List from "../components/List";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <h2>To Do List</h2>
          <Form />
          <List />
        </div>
      </Fragment>
    );
  }
}

export default App;
