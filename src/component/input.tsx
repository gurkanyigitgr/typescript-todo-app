import React from "react";
const style = {
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `p-4 ml-2 bg-purple-500 text-slate-100 rounded-lg font-semibold`,
};

const Input = () => {
  return (
    <>
      <form className={style.form}>
        <input className={style.input} type="text" placeholder="Add Todo" />
        <button className={style.button}>Add</button>
      </form>
    </>
  );
};

export default Input;
