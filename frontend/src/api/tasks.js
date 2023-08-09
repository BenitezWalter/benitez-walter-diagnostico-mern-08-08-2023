import axios from "axios";

export const getTasksRequest = async () => {
  return await axios.get("http://localhost:3000/getTasks");
};
export const updateTaskStatusRequest = async (taskId) => {
  return await axios.patch(`http://localhost:3000/updateStatus/${taskId}`);
};

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:3000/deleteTask/${id}`);
};

export const createTaskRequest = async (name,description)=>{
  return await axios.post("http://localhost:3000/createTask",{name,description})
}
