const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const eventType = new GraphQLObjectType({
  name: 'Event',
  fields: {
    _id: { type: GraphQLID },
    content: { type: GraphQLString }
  }
});

module.exports = { eventType };