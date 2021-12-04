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
   const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFiOWNjZTI4MGE4M2NhZmMwMTVhZTAiLCJub21icmUiOiJ1c3VhcmlvMiIsImFwZWxsaWRvIjoiYXAyIiwiaWRlbnRpZmljYWNpb24iOiI5Nzc3IiwiY29ycmVvIjoiYW5hbmFuQGdtYWlsLmNvbSIsInJvbCI6IkxJREVSIiwiaWF0IjoxNjM4NjM2NzUwLCJleHAiOjE2Mzg3MjMxNTB9.EvS7PRo6rVnPnMqTA-EaLY5VoUZFtAnaRHVta4HgvQU";
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