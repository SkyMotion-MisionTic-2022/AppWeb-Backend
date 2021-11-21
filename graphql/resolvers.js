import { projectResolvers } from '../models/proyecto/resolvers.js';
import { resolverUsuario } from '../models/usuario/resolvers.js';
import { resolverInscripcion } from '../models/inscripcion.resolvers.js';
import { resolverAvance } from '../models/avance/resolver.js';

export const resolvers = [projectResolvers, resolverUsuario, resolverInscripcion, resolverAvance];
