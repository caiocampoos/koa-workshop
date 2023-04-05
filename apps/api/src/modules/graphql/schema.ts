import { GraphQLSchema } from 'graphql';
import { MutationType } from './mutation';
import { QueryType } from './query';

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
