import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";
import { ModeloInscripciones } from "./inscripcion.js";

const resolverInscripcion = {
    Inscripcion: {
        proyecto: async (parent, args, context) => {
            return await ModeloProyecto.findOne({ _id: parent.proyecto });
        },
        estudiante: async (parent, args, context) => {
            return await ModeloUsuario.findOne({ _id: parent.estudiante });
        },
    },

    Query: {
        Inscripciones: async (parent, args, context) => {
            let filtro = {};
            if (context.userData){
                if(context.userData.rol === 'LIDER') {
                 const projects = await ModeloProyecto.find({ lider: context.userData._id});
                 const listaProyecto = projects.map((p) => p._id.toString());
                 filtro ={
                     proyecto:{
                        $in: listaProyecto,
                        },
                    };
                }
            }
            const inscripciones = await  ModeloInscripciones.find({...filtro});
            return inscripciones;
        },
    },


    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await ModeloInscripciones.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada
        },

        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await ModeloInscripciones.findByIdAndUpdate(args._id, {
                estado: args.estado
            }, { new: true });
            return inscripcionAprobada
        },

        eliminarInscripcion: async (parent, args) => {
            const inscripcionEliminada = await ModeloInscripciones.findOneAndDelete({ _id: args._id });
            return inscripcionEliminada;
        }
    },
};

export { resolverInscripcion };