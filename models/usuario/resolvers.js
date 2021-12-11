import { ModeloUsuario } from './usuario.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const resolversUsuario = {
  Query: {
    
    Usuarios: async (parent, args,context) => {
      
      if (context.userData.rol === "ADMINISTRADOR") {
        const usuarios = await ModeloUsuario.find();
        return usuarios;
      } else if (context.userData.rol === "LIDER") {
        const usuarios = await ModeloUsuario.find({ rol: "ESTUDIANTE" });
        return usuarios;
      }
      return null;
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
    editarPerfil: async (parent, args) => {
      try {
        const saltos = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(args.password, saltos);

        const perfilEditado = await ModeloUsuario.findByIdAndUpdate(
          args._id,
          {
            nombre: args.nombre,
            apellido: args.apellido,
            identificacion: args.identificacion,
            correo: args.correo,
            rol: args.rol,
            estado: args.estado,
            password: hashedPassword,
          },
          {
            new: true,
          }
        );

        return {
          token: generateToken({
            _id: perfilEditado._id,
            nombre: perfilEditado.nombre,
            apellido: perfilEditado.apellido,
            identificacion: perfilEditado.identificacion,
            correo: perfilEditado.correo,
            password: perfilEditado.password,
            rol: perfilEditado.rol,
          }),
          authorized: true,
        };
      } catch (e) {
        return {
          error: e,
        };
      }

    },
  },
};

export { resolversUsuario };