import { projectResolvers } from '../models/proyecto/resolvers.js';
import { resolversUsuario } from '../models/usuario/resolvers.js';
import { resolverInscripcion } from '../models/inscripcion/resolvers.js';
import { resolverAvance } from '../models/avance/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js'

export const resolvers = [projectResolvers, resolversUsuario, resolverInscripcion, resolverAvance, resolversAutenticacion];
