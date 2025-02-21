import React, { useContext } from "react";
import TodooItem from "./TodooItem";
import { TodoContext } from "../store/Todo-Item_context";

export default function TodooItems() {
  
  const {todooList} = useContext(TodoContext)
  


  return (
    <>
      {todooList.map((todoo) => (
        <TodooItem
          key={todoo.Name}
          todooName={todoo.Name}
          todooDate={todoo.dueDate}
        />
      ))}
    </>
  );
}
