import React from "react";
import Input from "./component/input";
import Todo from "./component/todo";
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#A1CCD1] to-[#7C9D96]`,
  container: `bg-slate-100 max-w-[500px] w-full mx-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100 rounded-lg `,
  buttonSec: `border-none w-[150px] h-[50px] bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg text-white font-semibold`,
  count: `text-center p-2`,
  centeredDiv: `flex flex-col space-y-5 items-center justify-center mt-5 mb-5 md:flex-row md:space-x-10 md:space-y-0`,
};

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <Input />
        <ul>
          <Todo />
        </ul>
        <p className={style.count}>You have 4 todos</p>
        <div className={style.centeredDiv}>
          <button className={style.buttonSec}>Active</button>
          <button className={style.buttonSec}>Completed</button>
          <button className={style.buttonSec}>All Todos</button>
        </div>
      </div>
    </div>
  );
}

export default App;
