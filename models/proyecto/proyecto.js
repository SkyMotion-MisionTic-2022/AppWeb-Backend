import { mongoose } from 'mongoose';
const { Schema, model } = 'mongoose';
import { UserModel } from '../usuario/usuario.js';

// interface Proyecto {
//     nombre: string;
//     presupuesto: number; //float
//     fechaInicio: Date;
//     fechaFin: Date,
//     estado: Enum_EstadoProyecto,
//     fase: Enum_FaseProyecto,
//     lider: string,
//     objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
// }

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
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },
    fase:{
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO,
    },
    lider: {
       
       type: String,
       required: true,
    
    },
    objetivos: [
        {
          descripcion: {
            type: String,
            required: true,
          },
          tipo: {
            type: String,
            enum: Enum_TipoObjetivo,
            required: true,
          },
        },
      ],
});

export const ModeloProyecto = model('Proyecto', projectSchema );