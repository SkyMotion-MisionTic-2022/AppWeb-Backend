import mongoose from 'mongoose';
import { ModeloProyecto } from '../projecto/projecto.js';
import { ModeloUsuario } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: true,
    },
    estado: {
        type: String,
        enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    }, 
    fechaIngreso: {
        type: Date,
        required: false,
    },
    fechaEgreso: {
        type: Date,
        required: false,
    },
});

const ModeloInscripcion = model ('Inscripcion', inscripcionSchema)

export { ModeloInscripcion };