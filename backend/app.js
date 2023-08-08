import express from 'express'
import routertask from './routes/tasks.routes.js'
import cors from 'cors'
import dbConnect from './db.js'
import morgan from 'morgan'

dbConnect()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(routertask)


app.listen(3000, ()=>{
    console.log("Servidor en puerto 3000")
})