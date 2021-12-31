import "./ToDoItems.css";

import { Checkbox } from "@mui/material";

import {Types} from "..";

import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const ToDoItems = ({ list, dispatch}) => {
  const handleDeleteItem = (listId,ItemId) => {
    dispatch({type:Types.DeleteItem ,payload:{listId,ItemId}})
  };
  const handleUpdateItemStatus = (listId, ItemId, e) => {
    dispatch({type:Types.UpdateItemStatus ,payload:{listId,ItemId,checked:e.target.checked}})
  };
  return (
    <>
      {list.listItem.map((item) => (
        <div className="listItems">
          <div key={`${list.listID}-${item.id}`}>
            <Checkbox
              icon={<RadioButtonUncheckedRoundedIcon fontSize="large" />}
              checked={item.status}
              onChange={(e) =>
                handleUpdateItemStatus(list.listID, item.itemID, e)
              }
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
    </>
  );
};

export default ToDoItems;
