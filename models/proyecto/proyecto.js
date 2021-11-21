import  mongoose  from 'mongoose';
const { Schema, model } = mongoose;
import { UserModel } from '../usuario/usuario.js';


const projectSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    estado:{
        type: String,
        enum: ["ACTIVO","INACTIVO"],
        default: "INACTIVO",
    },
    fase:{
        type: String,
        enum: ["INICIADO","DESARROLLO","TERMINADO","NULO"],
        default: "NULO",
    },
    lider: {
       
      type: Schema.Types.ObjectId,
      ref: UserModel,
    
    },
    objetivos: [
        {
          descripcion: {
            type: String,
            required: true,
          },
          tipo: {
            type: String,
            enum: ["GENERAL","ESPECIFICO"],
            required: true,
          },
        },
      ],
});

export const ModeloProyecto = model('Proyecto', projectSchema );