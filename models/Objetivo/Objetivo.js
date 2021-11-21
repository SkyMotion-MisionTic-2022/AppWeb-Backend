import mongoose, { Schema } from 'mongoose';

const { Schema, model } = mongoose;

const objetivoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: ['GENERAL', 'ESPECÍFICO'],
        required: true
    }
})

const ModeloObjetivo = model ('Objetivo', objetivoSchema);

export { ModeloObjetivo }s