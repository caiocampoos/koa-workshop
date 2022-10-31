const { eventType } = require('../nodeTypes');
const { GraphQLList } = require('graphql');
const EventService = require('../../services/EventService');

const EventsQuery = {
  type: GraphQLList(eventType),
  args: {},
  resolve: async () => {
    const eventService = new EventService();
    const events = await eventService.getAllEvents();

    return events;
  }
};

module.exports = { EventsQuery };