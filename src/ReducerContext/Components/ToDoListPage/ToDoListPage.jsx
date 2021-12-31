import "./ToDoListPage.css";

import { ToDoList, AddCategory } from "..";

const ToDoListPage = ({
  toDoList,
  setToDoList,
  setNewCategory,
  newCategory,
}) => {
  return (
    <div className="page">
      <div className="pageContainer">
        <AddCategory
          toDoList={toDoList}
          setToDoList={setToDoList}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
        />
        <ToDoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
        />
      </div>
    </div>
  );
};

export default ToDoListPage;
