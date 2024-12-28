import axios from "axios";

const API_URL = "https://task-mern-backend-phi6.onrender.com/api/tasks/";

const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, taskData, config);
  return response.data;
};

const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const deleteTask = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const taskService = { createTask, getTasks, deleteTask };

export default taskService;

//: 😅 i haven't created the test for this file because currently i am using depreciated packages which don't let me to do so...
//? 🦾 i will be doing in other bundlers like VITE possibly...