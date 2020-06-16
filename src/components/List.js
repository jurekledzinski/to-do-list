import React from "react";
import "../styles/List.css";
import Task from "./Task";

const List = (props) => {
  const list = props.data;
  let listTasks = props.data.map((task) => (
    <Task key={task.id} id={task.id} text={task.task} date={task.date} />
  ));
  return (
    <>
      <div className="wrapper-list">
        <h3>Zadania do zrobienia</h3>
        <ul>{listTasks}</ul>
      </div>
    </>
  );
};

export default List;
