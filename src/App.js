import { useState, useReducer } from "react";
import Heading from "./components/Heading.js";
import Todoo from "./components/Todoo.js";
import TodooItems from "./components/TodooItems.js";
import HomeMessage from "./components/HomeMessage.js";
import { TodoContext } from "./store/Todo-Item_context.js";

const todoItemsReducer = (currTodoItems, action) => {
  let newItemAdd = currTodoItems;
  if (action.type === 'NEW_ITEM') {
   newItemAdd = [
      ...currTodoItems,
      { Name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === 'DELETE_ITEM') {
    newItemAdd = currTodoItems.filter(
      (item) => item.Name !== action.payload.itemName
    );
    //setTodooList(toDeleteItem);

  }
  return newItemAdd;
} 

function App() {
  let initialtodooList = [];

  //const [todooList, setTodooList] = useState(initialtodooList);
  const [todooList, dispatchTodooItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload : {
        itemName,
        itemDueDate
      }
    };
    dispatchTodooItems(newItemAction);

   
   
    /* setTodooList((currValue) => {
      const newItemAdd = [
        ...currValue,
        { Name: itemName, dueDate: itemDueDate },
      ];
      return newItemAdd;
    });*/
  };

  const deleteItem = (todooItemName) => {
    
    
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload : {
        itemName : todooItemName,
      }
    };
    dispatchTodooItems(deleteItemAction);




    
  };



  return (
    <>
      <TodoContext.Provider value={{
        todooList,
        addNewItem,
        deleteItem,
      }}>
        <center>
          <Heading />
          <Todoo />
          <HomeMessage  />
          <TodooItems/>
        </center>
      </TodoContext.Provider>
    </>
  );
}

export default App;
