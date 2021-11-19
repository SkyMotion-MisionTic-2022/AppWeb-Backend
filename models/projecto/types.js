import { gql } from 'apollo-server-express';

const tiposProyectos = gql`
  scalar Date
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: String!
    
  }
  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  type Query {
    Proyectos: [Proyecto]
  }
  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      
    ): Proyecto
  }
`;

export { tiposProyectos };