import "./ToDoListPage.css";

import {
  ToDoList,
  AddCategory,
  ToDoListContextProvider,
  CategoryContextProvider,
} from "..";

const ToDoListPage = () => {
  return (
    <ToDoListContextProvider>
      <CategoryContextProvider>
        <div className="page">
          <div className="pageContainer">
            <AddCategory />
            <ToDoList />
          </div>
        </div>
      </CategoryContextProvider>
    </ToDoListContextProvider>
  );
};

export default ToDoListPage;
