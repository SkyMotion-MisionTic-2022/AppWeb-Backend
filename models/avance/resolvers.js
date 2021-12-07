import { ModeloAvance } from "./avance.js";

const resolverAcance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
            return avances;
        },
        filtrarAvance: async (parent, args) => {
            const avanceFiltrado = await ModeloAvance.find({ proyecto: args.idProyecto }).populate('proyecto').populate('creadoPor');
            return avanceFiltrado;
        },
    },

    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = await ModeloAvance.create({
                proyecto: args.proyecto,
                fecha: args.fecha,
                descripcion: args.descripcion,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
        editarAvance: async (parent, args) => {
            const avanceEditado = await ModeloAvance.findByIdAndUpdate(args._id, {
                proyecto: args.proyecto,
                fecha: args.fecha,
                descripcion: args.descripcion,
                creadoPor: args.creadoPor,
            },
                { new: true });
            return avanceEditado;
        },
        eliminarAvance: async (parent, args) => {
            const avanceEliminado = await ModeloAvance.findByIdAndDelete(args._id)
            return avanceEliminado;
        },
        crearObservacion: async (parent, args) => {
            const avanceConObservacion = await ModeloAvance.findByIdAndUpdate(
                args.idAvance,
                {
                    $addToSet: {
                        observaciones: { ...args.campos },
                    },
                },
                { new: true }
            );
            return avanceConObservacion;
        },
        editarObservacion: async (parent, args) => {
            const avanceObservacionEditada = await ModeloAvance.findByIdAndUpdate(
                args.idAvance,
                {
                    $set: {
                        [`observaciones.${args.indexObservacion}.observacion`]: args.campos.observacion,
                    },
                },
                { new: true }
            );
            return avanceObservacionEditada;
        },
        eliminarObservacion: async (parent, args) => {
            const avanceObservacionEliminada = await ModeloAvance.findByIdAndUpdate(
                { _id: args.idAvance },
                {
                    $pull: {
                        observaciones: {
                            _id: args.idObservacion,
                        },
                    },
                },
                { new: true }
            );
            return avanceObservacionEliminada;
        },

    },
};

export { resolverAcance };