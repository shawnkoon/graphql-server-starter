import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './src/schema';

const GRAPHQL_PORT = 5001;
const app = express();
const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

app.listen({ port: GRAPHQL_PORT }, () => {
  console.log(
    `\n...🚀 Server is ready at http://localhost:${GRAPHQL_PORT}${apolloServer.graphqlPath}`
  );
});
