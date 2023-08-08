import mongoose from 'mongoose'

const dbConnect = async () => {

    try {
        mongoose.connect('mongodb://127.0.0.1:27017/tasksdatabase')
        console.log('Base de datos conectada');    
    } catch (error) {
        console.log('Error al conectar la base de datos', error.message);
    }
}


export default dbConnect

