const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AddCategory":
      return [
        ...state,
        {
          listID: Math.floor(Math.random() * 10000),
          listName: payload.listName,
          listItem: [],
        },
      ];
    case "DeleteCategory":
      return state.filter((item) => item.listID !== payload.listID);
    case "AddItem":
      return state.map((item) =>
        item.listID === payload.list.listID
          ? {
              ...item,
              listItem: [
                ...item.listItem,
                {
                  itemID: Math.floor(Math.random() * 10000),
                  itemTitle: payload.itemTitle,
                  status: false,
                },
              ],
            }
          : item
      );
    case "DeleteItem":
      return state.map((list) =>
        list.listID === payload.listId
          ? {
              ...list,
              listItem: list.listItem.filter(
                (item) => item.itemID !== payload.ItemId
              ),
            }
          : list
      );
    case "UpdateItemStatus":
      return state.map((todo) =>
        todo.listID === payload.listId
          ? {
              ...todo,
              listItem: todo.listItem.map((item) =>
                item.itemID === payload.ItemId
                  ? { ...item, status:payload.checked }
                  : item
              ),
            }
          : todo
      );
    default:
      return state;
  }
};
export default Reducer;

export const Types = {
  AddCategory: "AddCategory",
  DeleteCategory: "DeleteCategory",
  AddItem: "AddItem",
  DeleteItem: "DeleteItem",
  UpdateItemStatus: "UpdateItemStatus",
};
