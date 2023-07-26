import React from "react";
const style = {
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl mr-5 rounded-lg`,
  button: `border-none w-[150px] h-[50px] bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg text-white font-semibold`,
};

type todoProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Input: React.FC<todoProps> = ({ todo, setTodo, addMessage }) => {
  return (
    <>
      <form className={style.form} onSubmit={addMessage}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Add Todo"
        />
        <button type="submit" className={style.button}>
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
