import { gql } from 'apollo-server-express';

const tiposAvance = gql`
    type Avance {
        _id: ID!
        proyecto: Proyecto!
        fecha: Date!
        descripcion: String!
        observaciones: [String]
        creadoPor: Usuario!
    }

    type Query {
        Avances: [Avance]
        filtrarAvance(idProyeco: String!): [Avance]
    }

    type Mutation {
        crearAvance(
            proyecto: String!
            fecha: Date!
            descripcion: String!
            creadoPor: String!
        ): Avance
    }
`;

export { tiposAvance };