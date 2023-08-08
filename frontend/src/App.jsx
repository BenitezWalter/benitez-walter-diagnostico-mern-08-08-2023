import { useEffect, useState } from "react";
import { deleteTaskRequest, getTasksRequest } from "./api/tasks";
import "../src/index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleCheckboxChange = async (e, taskId) => {
    const newTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, isCompleted: e.target.checked }:task
    );

    setTasks(newTasks);

    try {
      const response = await axios.post(`/api/updateTaskStatus/${taskId}`, {
        isCompleted: e.target.checked,
      });

      if (response.status === 200) {
      } else {
      }
    } catch (error) {
      console.error("Error:", error);
      // Manejar errores si es necesario
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const loadTasks = async () => {
      const response = await getTasksRequest();
      console.log(response.data.tasks);
      setTasks(response.data.tasks);
    };

    loadTasks();
  }, []);
  return (
    <>
      <div>
        {tasks.map((value, index) => {
          return (
            <div key={index} className="card-task">
              <h1 className="card-task-title">{value.name}</h1>
              <p className="card-task-description">{value.description}</p>
              <div className="card-task-completed">
                <label htmlFor="">
                  Completada: <span>{value.isCompleted ? "Si" : "No"}</span>
                </label>
                <input
                  type="checkbox"
                  name="isCompleted"
                  checked={value.isCompleted}
                  onChange={(e) => handleCheckboxChange(e, value._id)}
                />
              </div>
              <button onClick={()=>handleDelete(value._id)}>Borrar</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
