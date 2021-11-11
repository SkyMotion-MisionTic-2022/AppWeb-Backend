import { connect } from 'mongoose';
// const { connect } = requiere ('Mongoose'); un modo de importo


const conectarDB = async () =>{
    return await connect(
       'mongodb+srv://admin:AdminProyectos@gestionproyectomisionti.ayixf.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    )
    .then (() => {
        console.log('conexion exitosa');
     })
     .catch ( e => {
        console.error('Error conectnado a la bd', e);
     });
};

export default conectarDB