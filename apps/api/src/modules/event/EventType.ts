import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  connectionDefinitions,
  globalIdField,
} from 'graphql-relay';
import { Event } from '../event/EventModel';

export const EventType = new GraphQLObjectType<Event>({
  name: 'Event',
  fields: () => ({
    id: globalIdField('Event', (event) => event._id.toString()),
    event: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (event) => event.content ,
    }
  }),
});

export const EventConnection = connectionDefinitions({
  name: 'Event',
  nodeType: EventType,
});
