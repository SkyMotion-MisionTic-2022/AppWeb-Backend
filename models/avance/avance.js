import mongoose from 'mongoose';
import { ModeloProyecto } from '../proyecto/proyecto.js';
import { ModeloUsuario } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const avanceSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    observaciones: [
        {
            observacion: {
                type: String,
                required: false
            },
        },
    ],
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: true,
    },
});

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };