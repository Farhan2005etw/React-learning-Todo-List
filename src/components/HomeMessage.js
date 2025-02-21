import { useContext } from "react";
import { TodoContext } from "../store/Todo-Item_context";
import React from "react";

const HomeMessage = () => {
   
const {todooList} = useContext(TodoContext)

    return todooList.length === 0 &&  <p>Enjoy Your Day</p>
};

export default HomeMessage;