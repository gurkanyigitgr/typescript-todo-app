import React, { useState } from "react";
import Input from "./component/input";
import Todo from "./component/todo";
import { Todos } from "./types/Type";
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#A1CCD1] to-[#7C9D96]`,
  container: `bg-slate-100 max-w-[500px] w-full mx-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  button: `border-none w-[150px] h-[50px] bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg text-white font-semibold`,
  count: `text-center p-2`,
  centeredDiv: `flex flex-col space-y-5 items-center justify-center mt-5 mb-5 md:flex-row md:space-x-10 md:space-y-0`,
};

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArr, setTodoArr] = useState<Todos[]>([]);

  const addMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo)
      setTodoArr([...todoArr, { message: todo, id: todoArr.length + 1 }]);
    setTodo("");
  };

  const deleteMessage = (id: number) => {
    setTodoArr(todoArr.filter((todo) => todo.id != id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
        <ul>
          <Todo deleteMessage={deleteMessage} todoArr={todoArr} />
        </ul>
        <p className={style.count}>You have {todoArr.length} todo</p>
      </div>
    </div>
  );
};

export default App;
