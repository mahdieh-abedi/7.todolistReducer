import "./AddNewItem.css";

import { useState } from "react";

import { Form } from "react-bootstrap";

import {Types} from "..";

import { TextField } from "@mui/material";

const AddNewItem = ({list, dispatch }) => {
  const [newItem, setNewItem] = useState({
    status: false,
    itemTitle: "",
  });
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
