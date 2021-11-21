import { gql } from 'apollo-server-express';
import { tiposProyectos } from '../models/proyecto/tipos.js';
import { tiposInscripcion } from '../models/inscripcion/tipos.js'
import { tiposEnums } from '../models/enums/tipos.js';

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [
    tiposGlobales,
    tiposEnums,
    tiposProyectos,
    
];