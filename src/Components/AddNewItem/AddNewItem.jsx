import "./AddNewItem.css";

import {useContext } from "react";

import { ToDoContext,ToDoListContext,Types } from "..";

import { Form } from "react-bootstrap";

import { TextField } from "@mui/material";

const AddNewItem = ({ list}) => {
  const { dispatch} = useContext(ToDoListContext);
  const { newItem, setNewItem } = useContext(ToDoContext);
  
  const handleAddItem = (e) => {
    e.preventDefault();
    const itemTitle=newItem.itemTitle
    dispatch({type:Types.AddItem,payload:{itemTitle,list}})
    setNewItem({
      status: false,
      itemTitle: "",
    });
  };
  const handleChangeItem = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <div className="AddToDoItem">
      <Form onSubmit={handleAddItem}>
        <TextField
          id="standard-basic"
          label="Add New Item"
          variant="standard"
          name={"itemTitle"}
          value={newItem.itemTitle}
          onChange={handleChangeItem}
        />
      </Form>
    </div>
  );
};
export default AddNewItem;
