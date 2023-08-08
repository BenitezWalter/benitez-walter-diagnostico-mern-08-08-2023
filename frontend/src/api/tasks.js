import axios from "axios";

export const getTasksRequest = async () => {
  return await axios.get("http://localhost:3000/getTasks");
};
export const updateTaskStatusRequest = async (task) => {
  return await axios.put("http://localhost:3000/updateStatus", task);
};

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:3000/deleteTask/${id}`);
};

