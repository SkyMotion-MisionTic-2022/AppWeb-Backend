import { gql } from 'apollo-server-express';
import { tiposProyectos } from '../models/proyecto/tipos.js';
import { tiposInscripciones } from '../models/inscripcion/tipos.js'
import { tiposEnums } from '../models/enums/tipos.js';
import {tiposUsuario} from '../models/usuario/tipos.js'

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [
    tiposGlobales,
    tiposEnums,
    tiposProyectos,
    tiposUsuario,
    tiposInscripciones
];