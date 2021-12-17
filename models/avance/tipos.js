import { gql } from 'apollo-server-express';

const tiposAvance = gql`

type Observacion {
    _id: ID!
    observacion: String!
}

input crearObservacion {
    observacion: String!
}

input editarObservacion {
    _id: ID!
    observacion: String!
}

input camposObservacion {
    observacion: String!
}

input camposAvance {
    proyecto: String
    fecha: Date
    descripcion: String
    creadoPor: String
}

type Avance {
        _id: ID!
        proyecto: Proyecto!
        fecha: Date!
        descripcion: String!
        observaciones: [Observacion]
        creadoPor: Usuario!
    }

    type Query {
        Avances: [Avance]
        filtrarAvance(idProyecto: String!): [Avance]
        Avance(_id: String!): Avance
    }

    type Mutation {
        crearAvance(
            proyecto: String!
            fecha: Date!
            descripcion: String!
            creadoPor: String!
            observaciones: [crearObservacion]
        ): Avance

        editarAvance(
            _id: String!
            proyecto: String
            fecha: Date
            descripcion: String
            creadoPor: String
        ): Avance
        eliminarAvance (_id: String!): Avance

        crearObservacion(idAvance: String!, campos: camposObservacion): Avance

        editarObservacion(idAvance: String!, indexObservacion: Int!, campos: camposObservacion!): Avance
        
        eliminarObservacion(idAvance: String!, idObservacion: String!): Avance
    }
`;

export { tiposAvance };