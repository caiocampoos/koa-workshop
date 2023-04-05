import {
    connectionFromMongoCursor,
    mongooseLoader,
  } from '@entria/graphql-mongoose-loader';
  import DataLoader from 'dataloader';
  import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
  import { connectionArgs, ConnectionArguments } from 'graphql-relay';
  import { EventModel } from '../EventModel';
  import { EventConnection } from '../EventType';
  
  export const allEventsquery: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLNonNull(EventConnection.connectionType),
    description: 'All Events',
    args: connectionArgs,
    resolve: async (_root, args: ConnectionArguments, context) => {
      const loader = new DataLoader(async (ids) => {
        return mongooseLoader(EventModel, ids as string[]);
      });
  
      return connectionFromMongoCursor({
        cursor: EventModel.find(),
        context,
        args,
        loader: (_context, id) => loader.load(id),
      });
    },
  };
  