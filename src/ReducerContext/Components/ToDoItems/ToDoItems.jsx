import "./ToDoItems.css";

import { AddNewItem } from "..";
import { FormGroup, Checkbox, Grid } from "@mui/material";

import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const ToDoItems = ({ list, toDoList, setToDoList }) => {
  const handleDeleteItem = (listId, ItemId) => {
    setToDoList(
      toDoList.map((list) =>
        list.listID === listId
          ? {
              ...list,
              listItem: list.listItem.filter((item) => item.itemID !== ItemId),
            }
          : list
      )
    );
  };

  return (
    <>
      {list.listItem.map((item) => (
        <div className="listItems">
          <div key={list.listID * 100 + item.itemID}>
            <Checkbox
              icon={<RadioButtonUncheckedRoundedIcon fontSize="large" />}
              checkedIcon={
                <RadioButtonCheckedRoundedIcon
                  color="success"
                  fontSize="large"
                />
              }
            />
            <label>{item.itemTitle}</label>
          </div>
          <span>
            <HighlightOffRoundedIcon
              color="action"
              fontSize="large"
              onClick={() => {
                handleDeleteItem(list.listID, item.itemID);
              }}
            />
          </span>
        </div>
      ))}
      <AddNewItem list={list} toDoList={toDoList} setToDoList={toDoList} />
    </>
  );
};

export default ToDoItems;
