import "./ToDoList.css";

import {ToDoItems } from "..";

import { FormGroup, Grid } from "@mui/material";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const ToDoList = ({ toDoList, setToDoList }) => {
  const handleDeleteCategory = (id) => {
    setToDoList(toDoList.filter((item) => item.listID !== id));
  };
  return (
    <Grid container spacing={5} className="page">
      {toDoList.map((list) => (
        <Grid item xs={12} sm={6} md={4} key={list.listID} spacing={1}>
          <div className="listCard">
            <div className="header">
              <h3 className="headerTitle">{list.listName}</h3>
              <span>
                <DeleteOutlineRoundedIcon
                  onClick={() => handleDeleteCategory(list.listID)}
                />
              </span>
            </div>
            <FormGroup className="ItemContainer">
              <ToDoItems list={list} toDoList={toDoList} setToDoList={setToDoList}/>
            </FormGroup>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
export default ToDoList;
