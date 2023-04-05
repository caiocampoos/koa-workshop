import {
    GraphQLString,
} from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { EventType} from '../EventType';
import { CreateEvent } from '../EventService'

type EventArgs = {
    content: string;
  };

export const CreateEventMutation = mutationWithClientMutationId({
    name: 'CreateEvent',
    description: 'Create a new event',
    inputFields: {
      content: { type: GraphQLString },
    },
    outputFields: {
      event: {
        type: EventType,
        resolve: (event) => event,
      },
    },
    async mutateAndGetPayload(
      { content }: EventArgs,
      context
    ) {
      const event = await CreateEvent({
        content,
      });
  
      return event;
    },
  });
  