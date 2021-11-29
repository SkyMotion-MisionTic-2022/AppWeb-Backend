import { gql } from 'apollo-server-express';

const tiposAutentificación = gql`
   type Mutation {
       Registro {
           Nombre: String!
           Apellido: String!
           Identificación: String!
           Correo: String!
           Rol: Enum_Rol!
           Estado: EnumEstadoUsuario
           Contraseña: String!
       }: String!
    }
    `;
    
export { tiposAutentificación }; 