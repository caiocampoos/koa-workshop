import { GraphQLObjectType } from 'graphql';
import * as eventQueries from '../event/queries';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type',
  fields: () => ({
    ...eventQueries,
  }),
});
