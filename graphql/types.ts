import { gql } from 'apollo-server-express';
import { tiposProyecto } from '../models/project/types.js';
import { TiposInscripciones } from '../models/inscripcion/tipos.js'
import { tiposEnums } from '../models/enums/tipos.js';

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [
    tiposGlobales,
    tiposEnums,
    tiposProyecto,
    TiposInscripciones
];