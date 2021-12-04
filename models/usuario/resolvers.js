import { ModeloUsuario } from './usuario.js';

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await ModeloUsuario.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await ModeloUsuario.findOne({ _id: args._id });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);

      const usuarioCreado = await ModeloUsuario.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        password: hashedPassword,
        rol: args.rol,
      });

      if (Object.keys(args).includes('estado')) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditado = await ModeloUsuario.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificacion,
          correo: args.correo,
          rol: args.rol,
          estado: args.estado,
        },
        {
          new: true,
        }
      );

      return usuarioEditado;
    },
    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await ModeloUsuario.findOneAndDelete({ _id: args._id });
        return usuarioEliminado;
      } else if (Object.keys(args).includes('correo')) {
        const usuarioEliminado = await ModeloUsuario.findOneAndDelete({ correo: args.correo });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUsuario };