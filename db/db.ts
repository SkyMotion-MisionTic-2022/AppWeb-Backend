import { connect } from 'mongoose';
// const { connect } = requiere ('Mongoose'); un modo de importo


const conectarDB = async () =>{
    return await connect(process.env.DATABASE_URL)
    .then (() => {
        console.log('conexion exitosa');
     })
     .catch ( e => {
        console.error('Error conectnado a la bd', e);
     });
};

export default conectarDB