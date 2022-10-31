const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { EventsQuery } = require('./query/EventsQuery');
const {
  CreateEventMutation,
  UpdateEventMutation,
  DeleteEventMutation
} = require('./mutation/EventsMutation');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    events: EventsQuery
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createEvent: CreateEventMutation,
    deleteEvent: DeleteEventMutation,
    updateEvent: UpdateEventMutation
  })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

module.exports = schema;