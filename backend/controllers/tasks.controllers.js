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

ctrlTasks.updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { isCompleted } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { isCompleted },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({
      msg: "Task status updated",
      updatedTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

ctrlTasks.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId)
    console.log(deletedTask)
    console.log(req.params.id)

    if (!deletedTask) {
      return res.status(404).json({ msg: "Task not found" });
    } else {
      res.json({
        msg: "Task deleted",
        deletedTask,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export default ctrlTasks;
