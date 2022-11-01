/* eslint-disable no-unused-vars */
const { eventType } = require('../nodeTypes');
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} = require('graphql');
const EventService = require('../../services/EventService');

const CreateEventMutation = {
  type: eventType,
  args: {
    content: { type: GraphQLString }
  },
  resolve: async (_, { content }) => {
    const eventService = new EventService();
    const newEvent = await eventService.createEvent({ content });

    return newEvent;
  }
};

const DeleteEventMutation = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const eventService = new EventService();
    const res = await eventService.deleteEvent(_id);

    if (res.ok) {
      return _id;
    }
  }
};

const UpdateEventMutation = {
  type: eventType,
  args: {
    _id: { type: GraphQLID },
    content: { type: GraphQLString }
  },
  resolve: async (_, { _id, content }) => {
    const eventService = new EventService();
    const updatedEvent = await eventService.updateEvent(_id, { content });

    return updatedEvent;
  }
};

module.exports = { CreateEventMutation, UpdateEventMutation, DeleteEventMutation };