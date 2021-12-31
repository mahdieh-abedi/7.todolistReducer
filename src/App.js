import "./App.css";

import React, { useState, useEffect, useReducer } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Data, Menu, ToDoListPage, HomePage,Reducer } from "./Components";

const App = () => {
  const [toDoList, dispatch] = useReducer(
    Reducer,
    JSON.parse(localStorage.getItem("Data")) || Data
  );

  const [newCategory, setNewCategory] = useState({
    listID: "",
    listName: "",
    listItem: [],
  });

  useEffect(() => {
    document.title = "Weekly Planner";
    localStorage.setItem("Data", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<HomePage />} />
          <Route
            path="ToDoListPage"
            element={
              <ToDoListPage
                toDoList={toDoList}
                dispatch={dispatch}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
