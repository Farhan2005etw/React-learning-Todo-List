import { createContext } from "react";
import { useReducer } from "react";


export const TodoContext = createContext(null);

const todoItemsReducer = (currTodoItems, action) => {
    let newItemAdd = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newItemAdd = [
        ...currTodoItems,
        { Name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newItemAdd = currTodoItems.filter(
        (item) => item.Name !== action.payload.itemName
      );
    }
    return newItemAdd;
  };
  

const TodoItemsContextProvider = ({children}) => {
    
  const [todooList, dispatchTodooItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodooItems(newItemAction);
  };

  const deleteItem = (todooItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todooItemName,
      },
    };
    dispatchTodooItems(deleteItemAction);
  };

  return  <TodoContext.Provider
  value={{
    todooList,
    addNewItem,
    deleteItem,
  }}
  >
  {children}
</TodoContext.Provider>

}

export default TodoItemsContextProvider