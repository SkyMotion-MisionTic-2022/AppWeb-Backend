import { ModeloProyecto } from "./proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const projectResolvers = {
  Proyecto: {
    lider: async (parent, args, context) => {
      const usr = await ModeloUsuario.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
  },
  Query: {
    Proyectos: async (parent, args, context) => {
      console.log(context.userData);
      if (context.userData.rol === "ADMINISTRADOR" || context.userData.rol === "ESTUDIANTE") {
        const proyectos = await ModeloProyecto.find().populate('lider').populate("avances").populate("inscripciones");
        return proyectos;
      } else if (context.userData.rol === "LIDER") {
        const proyectos = await ModeloProyecto.find({ lider: context.userData._id });
        return proyectos;
      }
      return null;
    },
    Proyecto: async (parent, args) => {
      const proyecto = await ModeloProyecto.findOne({ _id: args._id });
      return proyecto;
    },
  },

  // Query: {
  //   Proyectos: async (parent, args, context) => {
  //     if(context.userData.rol=== "ADMINISTRADOR" || context.userData.rol=== "ESTUDIANTE" ){
  //     const proyectos = await ModeloProyecto.find().populate('lider').populate("avances").populate("inscripciones");
  //     return proyectos;
  //     }else if (context.userData.rol=== "LIDER"){
  //       const proyectos = await ModeloProyecto.find({lider: context.userData._id});
  //       return proyectos;
  //     }
  //     return null;
  //   },
  // },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ModeloProyecto.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    eliminarProyecto: async (parent, args) => {

      const proyectoEliminado = await ModeloProyecto.findOneAndDelete({ _id: args._id });
      return proyectoEliminado;

    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return proyectoEditado;
    },

    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await ModeloProyecto.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
      );
      return proyectoConObjetivo;
    },
    editarObjetivo: async (parent, args) => {
      const proyectoObjetivoEditado = await ModeloProyecto.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoObjetivoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivoEliminado = await ModeloProyecto.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },
        { new: true }
      );
      return proyectoObjetivoEliminado;
    },

  },
};

export { projectResolvers };