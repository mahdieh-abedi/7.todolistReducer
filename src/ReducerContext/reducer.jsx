const Reducer=(state,action)=>{
    const{type,payload}=action;
    switch(type){
        case"DeleteCategory":
        return state.filter((item) => item.listID !== payload.listID)
        case"AddCategory":
        return ([...state,{
            listID: Math.floor(Math.random() * 10000),...newCategory
          }])
    }
}
export const Types = {
    DeleteCategory: "DeleteCategory",
  };
