import mongoose from 'mongoose';
import { ModeloProyecto } from '../proyecto/proyecto.js';
import { UserModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
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

const ModeloInscripciones = model ('Inscripcion', inscripcionSchema, 'inscripciones')

export { ModeloInscripciones };