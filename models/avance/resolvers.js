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
        }
    },
};

export { resolverAcance };