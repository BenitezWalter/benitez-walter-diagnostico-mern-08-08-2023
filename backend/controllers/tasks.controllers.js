import Task from "../models/Task.js";
const ctrlTasks = {};

ctrlTasks.createTask = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newTask = new Task({
      name,
      description,
    });
    const taskSave = await newTask.save();

    res.json({
      msg: "Tarea guardada",
      taskSave,
    });
  } catch (error) {
    console.log(error);
  }
};

ctrlTasks.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json({
      msg: "Tareas:",
      tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

ctrlTasks.updateTaskStatus = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { $set: { isCompleted: !task.isCompleted } },
      { new: true }
    );

    if (!updatedTask) {
      res.json({
        msg: "La tarea no se encontro",
      });
    }

    res.json({
      msg: "Estado de la tarea actualizado",
      updatedTask,
    });
  } catch (error) {
    res.json({ error: "Error en el servidor" });
    console.log(error);
  }
};

ctrlTasks.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    } else {
      res.json({
        msg: "Tarea eliminada",
        deletedTask,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

export default ctrlTasks;
