import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
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
        ): Inscripcion

        aprobarInscripcion(
            id: String!
            ): Inscripcion

        rechazarInscripcion(
            id: String!
            ): Inscripcion

        eliminarInscripcion(_id: String!): Inscripcion
    }
`;

export { tiposInscripcion };