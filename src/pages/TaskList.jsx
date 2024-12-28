import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, getTasks } from "../redux/tasks/task.slice";
import TaskItem from "../components/TaskItem";
import Spinner from "../components/Spinner";

const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    if (isError) console.log(message);
    dispatch(getTasks());
    return () => dispatch(reset());
  }, [navigate, isError, message, dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="w-screen py-8 px-12 flex flex-col items-center gap-4">
      <div className="text-4xl font-bold">Your Tasks</div>
      <div className="flex flex-col w-full gap-4">
        {tasks.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TaskList;
