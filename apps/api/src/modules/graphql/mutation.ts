import { GraphQLObjectType } from 'graphql';
import * as eventMutations from '../event/mutations';

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation type',
  fields: () => ({
    ...eventMutations
  }),
});
