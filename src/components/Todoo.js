import { useContext, useRef } from "react";
import { MdOutlineAlarmAdd } from "react-icons/md";
import { TodoContext } from "../store/Todo-Item_context";


function Todoo(){

  const {addNewItem} = useContext(TodoContext)  
  const todoNameElement = useRef();
  const dueDateElement = useRef()


  const handleAddButtonClicked = () => {
    
    const todooName = todoNameElement.current.value;
    const todooDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    if(todooName.trim() === "" || todooDate.trim() === ""){
      alert("Please Enter Task and Date.");
      return;
    }

    addNewItem(todooName, todooDate)
  }   
    return(
        <><div className="row">
        <div className="col-4"><input ref={todoNameElement}   type="text" placeholder='Enter Your Task' /></div>
        <div className="col-4"><input ref={dueDateElement}   type="Date" /></div>
        <div className="col-2"><button onClick={handleAddButtonClicked} type="button" className="btn btn-success"><MdOutlineAlarmAdd />
        </button></div>
      </div></>
    );
}

export default Todoo;