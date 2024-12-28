import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      <section className="mt-5 w-screen gap-2 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-semibold">Welcome, {user && user.name}</h1>
        <div className="flex justify-center w-full items-center mt-4">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg" onClick={() => navigate('/alltasks')}>Show Tasks</button>
        </div>
      </section>
      <TaskForm />
    </>
  );
};

export default Dashboard;
