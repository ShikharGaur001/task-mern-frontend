import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/tasks/task.slice";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
    setText("");
    navigate("/alltasks");
  };

  return (
    <section className="w-screen mt-4">
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col items-center gap-4"
      >
        <label
          htmlFor="text"
          className="w-1/3 -mb-3 ml-2 text-sm text-zinc-500"
        >
          Enter Task
        </label>
        <input
          type="text"
          id="text"
          className="w-1/3 px-3 py-2 rounded-lg border-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="w-1/3 px-3 py-2 rounded-lg bg-black text-white"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
