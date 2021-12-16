import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { gql } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';
import conectarBD from './db/db.js';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();
await conectarBD();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

it('Crear Usuario', async () => {
  const result = await server.executeOperation({
    query: gql`
        mutation Mutation(
          $nombre: String!
          $apellido: String!
          $identificacion: String!
          $correo: String!
          $rol: Enum_Rol!
          $password: String!
        ) {
          crearUsuario(
            nombre: $nombre
            apellido: $apellido
            identificacion: $identificacion
            correo: $correo
            rol: $rol
            password: $password
          ) {
            correo
          }
        }
      `,
    variables: {
      nombre: 'Tname',
      apellido: 'Tlastname',
      identificacion: 'test123',
      correo: 'tmail@mail.com',
      password: 'test1',
      rol: 'ESTUDIANTE',
    },
  });
  assert.equal(result.data.crearUsuario.correo, 'tmail@mail.com')
});

it('Borrar usuario creado', async () => {
  const result = await server.executeOperation({
    query: gql`
    mutation EliminarUsuario($correo: String) {
      eliminarUsuario(correo: $correo) {
        correo
      }
    }
    `,
    variables: {
      correo: 'tmail@mail.com'
    },
  });
  assert.equal(result.data.eliminarUsuario.correo, 'tmail@mail.com');
});

// it('Crear Avance', async () => {
//   const result = await server.executeOperation({
//     query: gql`
//       mutation CrearAvance($proyecto: String!, $fecha: Date!, $descripcion: String!, $creadoPor: String!) {
//         crearAvance(proyecto: $proyecto, fecha: $fecha, descripcion: $descripcion, creadoPor: $creadoPor) {
//         _id
//         }
//       }
//     `,
//     variables: {
//       proyecto: 'proyectoTest',
//       fecha: '2021-12-09T00:00:00.000+00:00',
//       descripcion: 'Descripción test',
//       creadoPor: 'estudianteTest',
//     },
//   });
//   console.log('resultado', result.data)
//   // assert.equal(result.data.Usuarios.length, 1);

// });