import mongoose from 'mongoose';
//const { connect } = requiere ('Mongoose'); 


const conectarDB = async () =>{
    return await mongoose.connect(process.env.DATABASE_URL)
    .then (() => {
        console.log('conexion exitosa');
     })
     .catch ( e => {
        console.error('Error conectnado a la bd', e);
     });
};

export default conectarDB