// Lib
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

// App
import mocks from './mocks';
import { combinedResolvers } from './resolver';
import { combinedTypeDefs } from './type';

const schema = makeExecutableSchema({ typeDefs: combinedTypeDefs, resolvers: combinedResolvers });

addMockFunctionsToSchema({ mocks, schema, preserveResolvers: true });

export default schema;
