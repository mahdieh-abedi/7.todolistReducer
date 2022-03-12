import React, { useReducer, createContext,useEffect } from "react";
import {Data,Reducer} from "..";

export const ToDoListContext = createContext({toDoList:[] , dispatch:(input)=>{}});

const ToDoListContextProvider = ({ children }) => {
  const [toDoList, dispatch] = useReducer(
    Reducer,
    JSON.parse(localStorage.getItem("Data")) || Data
  );
  useEffect(() => {
    document.title = "Weekly Planner by reducer";
    localStorage.setItem("Data", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <ToDoListContext.Provider value={{toDoList,dispatch}}>{children}</ToDoListContext.Provider>
  );
};
export default ToDoListContextProvider;
