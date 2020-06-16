import React, { Component, Fragment } from "react";
import "../styles/App.css";
import Form from "../components/Form";
import List from "../components/List";

const list = [
  {
    id: 1,
    task: "Kupic samochód",
    date: "2020-07-23",
    isImportant: false,
    active: false,
  },
  {
    id: 2,
    task: "Zagarać w wiedźmina",
    date: "2020-09-03",
    isImportant: false,
    active: false,
  },
  {
    id: 3,
    task: "Jeść więcej",
    date: "2020-06-17",
    isImportant: false,
    active: false,
  },
  {
    id: 4,
    task: "umyć rower",
    date: "2020-07-13",
    isImportant: false,
    active: false,
  },
  {
    id: 5,
    task: "uczyć się programowania",
    date: "2020-06-16",
    isImportant: false,
    active: false,
  },
];

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
