import "./AddNewItem.css";

import { useState } from "react";

import { Form } from "react-bootstrap";

import { TextField } from "@mui/material";

const AddNewItem = ({ toDoList, setToDoList, list }) => {

  return (
    <div className="AddToDoItem">
      <Form>
        <TextField
          id="standard-basic"
          label="Add New Item"
          variant="standard"
          name={"itemTitle"}
        />
      </Form>
    </div>
  );
};
export default AddNewItem;
