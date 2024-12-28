import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasks/task.slice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-zinc-200 relative w-64 p-4 rounded-lg flex flex-col items-center justify-center gap-2">
      <div className="text-zinc-600">{new Date(task.createdAt).toLocaleString("en-US")}</div>
      <h2 className="text-2xl tracking-tight font-semibold">{task.text}</h2>
      <button onClick={() => dispatch(deleteTask(task._id))} className="absolute top-1 text-red-500 font-semibold right-2">X</button>
    </div>
  );
};
export default TaskItem;
