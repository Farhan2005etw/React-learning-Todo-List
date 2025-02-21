import { MdDelete } from "react-icons/md";
import { TodoContext } from "../store/Todo-Item_context";
import { useContext } from "react";


function TodooItem({todooName, todooDate, onDeleteClick}){

       const {deleteItem} = useContext(TodoContext)  

      return(
<>
<div className="row">
        <div className="col-4">{todooName}</div>
        <div className="col-4">{todooDate}</div>
        <div className="col-2"><button onClick={() => deleteItem(todooName)} type="button" className="btn btn-danger"><MdDelete />
        </button></div>
      </div>
</>
    );
}

export default TodooItem;