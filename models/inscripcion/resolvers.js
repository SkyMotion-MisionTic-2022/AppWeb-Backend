import { ModeloInscripcion } from "./inscripcion";

const resolverInscripcion = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await ModeloInscripcion.find();
            return inscripciones;
        }    
    },

    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await ModeloInscripcion.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
                estado: args.estado
            });
            return inscripcionCreada
        },
    },
};

export { resolverInscripcion };