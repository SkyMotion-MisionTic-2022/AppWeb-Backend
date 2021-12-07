import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db.js';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { validateToken } from './utils/tokenUtils.js';

dotenv.config();

const getUserData = (token) => {
 // const verificacion = validateToken(token.split(' ')[1]);
 const verificacion = validateToken(token);
 /* if (verificacion.data) {
    return verificacion.data;
  } else {
    return null;
  }*/
  if (verificacion) {
    return verificacion;
  } else {
    return null;
  }  
};

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req, res }) => {
   // const token = req.headers?.authorization ?? null;
   const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFlODQ0OWEyNzFhNWQ3NzYyZjA0MjgiLCJub21icmUiOiJhZG1pbiIsImFwZWxsaWRvIjoiYWRtaW4iLCJpZGVudGlmaWNhY2lvbiI6Ijk5OTk5OSIsImNvcnJlbyI6ImFkbWluQGFkbWluLmNvbSIsInJvbCI6IkFETUlOSVNUUkFET1IiLCJpYXQiOjE2Mzg4MjcwODEsImV4cCI6MTYzODkxMzQ4MX0.Rc3UpJcR79PKDeY4uCwXHdghC1hRtziL0Tx_BfK_hQc";
    if (token) {
      const userData = getUserData(token);
      if (userData) {
       
        return { userData };
      }
    }
    return null;
  },
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});