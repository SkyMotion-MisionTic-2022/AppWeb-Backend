import { ModeloProyecto } from "./proyecto.js";

const projectResolvers = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ModeloProyecto.find().populate('lider').populate("avances").populate("inscripciones");
      return proyectos;
    },
  },
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
        args._id, {
          nombre: args.nombre,
          estado: args.estado,
          fase: args.fase,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          presupuesto: args.presupuesto,
          objetivos: args.objetivos,
        },
        {
          new: true,
        }
      ); 
      return proyectoEditado;
    }
  },
};

export { projectResolvers };