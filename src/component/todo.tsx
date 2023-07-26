import React from "react";
import { Todos } from "../types/Type";
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
};

type Props = {
  todoArr: Todos[];
  deleteMessage: (id: number) => void;
};

const todo: React.FC<Props> = ({ todoArr, deleteMessage }) => {
  return (
    <>
      {todoArr.map((todo, i) => (
        <div key={i}>
          <li className={style.li}>
            {todo.message}
            <span
              className="cursor-pointer text-2xl font-bold"
              onClick={() => deleteMessage(todo.id)}
            >
              {" "}
              X{" "}
            </span>
          </li>
        </div>
      ))}
    </>
  );
};

export default todo;
