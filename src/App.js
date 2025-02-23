
import Heading from "./components/Heading.js";
import Todoo from "./components/Todoo.js";
import TodooItems from "./components/TodooItems.js";
import HomeMessage from "./components/HomeMessage.js";
import TodoItemsContextProvider  from "./store/Todo-Item_context.js";



function App() {


  return (
    <>
      <TodoItemsContextProvider>
        <center>
          <Heading />
          <Todoo />
          <HomeMessage />
          <TodooItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
