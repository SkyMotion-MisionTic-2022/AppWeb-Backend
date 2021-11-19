import { mongoose } from 'mongoose';
const { Schema, model } = mongoose;
// import { Enum_Rol, Enum_EstadoUsuario } from '../enums/enums';

const userSchema = new Schema({
  correo: {
    type: String,
    required: true, 
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'El formato del correo electrónico está malo.',
    },
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  },
});

const UserModel = model('User', userSchema);

export { UserModel };