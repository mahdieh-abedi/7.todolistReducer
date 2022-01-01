import React, { useState, createContext } from "react";

export const ToDoContext = createContext({newItem:{} , setNewItem:(input)=>{}});

const ToDoContextProvider = ({ children }) => {
    const [newItem, setNewItem] = useState({
        status: false,
        itemTitle: "",
      });
  return (
    <ToDoContext.Provider value={{newItem,setNewItem}}>{children}</ToDoContext.Provider>
  );
};
export default ToDoContextProvider;
