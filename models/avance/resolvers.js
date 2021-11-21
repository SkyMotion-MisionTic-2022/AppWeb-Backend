import { ModeloAvance } from "./avance.js";

const resolverAcance = {
    Query: {
        Avances: async (parent, args) => {
            const avances= await ModeloAvance.find().populate('proyecto').populate('creadoPor');
            return avances;
        },
        FiltrarAvance: async (parent, args) => {
            const avanceFiltrado= await ModeloAvance.find({proyecto: args.idProyecto}).populate('proyecto').populate('creadoPor');
            return avanceFiltrado;
        },
    },
    
    Mutation: {
        crearAvance: async(parent, args) => {
            const avanceCreado = await ModeloAvance.create({
                proyecto : args.proyecto,
                fecha: args.fecha,
                descripcion: args.descripcion,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
    },
};

export { resolverAcance };