import { useEffect, useState } from "react";
import {
  deleteTaskRequest,
  getTasksRequest,
  updateTaskStatusRequest,
  createTaskRequest,
} from "./api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleDelete = async (id) => {
    try {
      await deleteTaskRequest(id);

      const response = await getTasksRequest();
      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      await createTaskRequest(name, description);
      const response = await getTasksRequest();
      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleStatus = async (id) => {
    try {
      await updateTaskStatusRequest(id);
      const response = await getTasksRequest();
      setTasks(response.data.tasks);
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
    <div className="container">
      <div className="row">
        {tasks.map((value, index) => {
          return (
            <div className="col-lg-4 mt-4"key={index}>
              <div className="card" >
                <div key={index} className="card-body">
                  <h2 className="card-title">{value.name}</h2>
                  <p className="card-text">{value.description}</p>
                  <div className="card-task-completed">
                    <label htmlFor="">Completada:</label>
                    <button
                      onClick={() => toggleStatus(value._id)}
                      className={
                        value.isCompleted ? "btn btn-success mx-2" : "btn btn-danger mx-2"
                      }
                    >
                      {value.isCompleted ? "Si ✅" : "No ✖"}
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(value._id)}
                    className="btn btn-danger "
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container d-flex justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tarea de ejemplo"
            onChange={(event) => setName(event.target.value)}
            className="form-control mb-3"
          />
          <input
            type="text"
            name="description"
            placeholder="Descripcion de ejemplo"
            onChange={(event) => setDescription(event.target.value)}
            className="form-control mb-3"
          />
          <button className="btn btn-primary">Crear tarea</button>
        </form>
      </div>
    </div>
  );
}

export default App;
