import ctrlTasks from "../controllers/tasks.controllers.js";
import { Router } from "express"

const routertask = Router()

routertask.get('/getTasks', ctrlTasks.getTasks)
routertask.post('/createTask', ctrlTasks.createTask)
routertask.patch('/updateStatus/:id', ctrlTasks.updateTaskStatus)
routertask.delete('/deleteTask/:id', ctrlTasks.deleteTask)

export default routertask
