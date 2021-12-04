import { ModeloInscripciones } from "./inscripcion.js";

const resolverInscripcion = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await ModeloInscripciones.find().populate('estudiante').populate('proyecto');
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

        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await ModeloInscripciones.findByIdAndUpdate(args._id, {
                estado: args.estado
            });
            return inscripcionAprobada
        },

        eliminarInscripcion: async (parent, args) => {
            const inscripcionEliminada = await ModeloInscripciones.findOneAndDelete({ _id: args._id });
            return inscripcionEliminada;
        }
    },
};

export { resolverInscripcion };