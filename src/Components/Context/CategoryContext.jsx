import React, { useState, createContext } from "react";

export const CategoryContext = createContext({newCategory:{} , setNewCategory:(input)=>{}});

const CategoryContextProvider = ({ children }) => {
    const [newCategory, setNewCategory] = useState({
        listID: "",
        listName: "",
        listItem: [],
      });
  return (
    <CategoryContext.Provider value={{newCategory,setNewCategory}}>{children}</CategoryContext.Provider>
  );
};
export default CategoryContextProvider;
