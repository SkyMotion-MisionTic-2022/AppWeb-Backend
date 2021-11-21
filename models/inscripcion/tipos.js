import { gql } from 'apollo-server-express';

const tiposInscripciones = gql`
    type Inscripcion {
        _id: ID!
        proyecto: Proyecto!
        estudiante: Usuario!
        estado: Enum_EstadoInscripcion!
        fechaIngreso: Date
        fechaEgreso: Date
    }

    type Query {
        Inscripciones: [Inscripcion]
    }

    type Mutation {
        crearInscripcion(
            proyecto: String!
            estudiante: String!
            estado: Enum_EstadoInscripcion!
        ): Inscripcion

        aprobarInscripcion(_id: String!): Inscripcion
    }
`;

export { tiposInscripciones }; 