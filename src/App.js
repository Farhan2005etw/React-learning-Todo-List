import { useState } from "react";
import Heading from "./components/Heading.js";
import Todoo from "./components/Todoo.js";
import TodooItems from "./components/TodooItems.js";
import HomeMessage from "./components/HomeMessage.js";
import { TodoContext } from "./store/Todo-Item_context.js";

function App() {
  let initialtodooList = [];

  const [todooList, setTodooList] = useState(initialtodooList);

  const addNewItem = (itemName, itemDueDate) => {
    setTodooList((currValue) => {
      const newItemAdd = [
        ...currValue,
        { Name: itemName, dueDate: itemDueDate },
      ];
      return newItemAdd;
    });
  };

  const deleteItem = (todooItemName) => {
    const toDeleteItem = todooList.filter(
      (item) => item.Name !== todooItemName
    );
    setTodooList(toDeleteItem);
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
