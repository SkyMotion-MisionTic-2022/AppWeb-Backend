import { ModeloInscripciones } from "./inscripcion.js";

const resolverInscripcion = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await ModeloInscripciones.find();
            return inscripciones;
        }    
    },

    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await ModeloInscripciones.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
                estado: args.estado
            });
            return inscripcionCreada
        },
    },
};

export { resolverInscripcion };