import "./ToDoListPage.css";

import { ToDoList, AddCategory } from "..";

import { useState } from "react";

const ToDoListPage = ({
  toDoList,
  dispatch
}) => {

  const [newCategory, setNewCategory] = useState({
    listID: "",
    listName: "",
    listItem: [],
  });
  
  return (
    <div className="page">
      <div className="pageContainer">
        <AddCategory
          dispatch={dispatch}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
        />
        <ToDoList
          toDoList={toDoList}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default ToDoListPage;
