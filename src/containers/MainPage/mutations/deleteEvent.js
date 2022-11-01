import { commitMutation, graphql } from 'react-relay';
import environment from '../../../environment';

const mutation = graphql`
  mutation deleteEventMutation($_id: ID) {
    deleteEvent(_id: $_id)
  }
`;

function deleteEventMutation(_id) {
  const variables = {
    _id
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const root = store.getRoot();
      const events = root.getLinkedRecords('events');
      const newEvents = events.filter(v => v.getValue('_id') !== _id);

      root.setLinkedRecords(newEvents, 'events');
    },

    onError: err => console.error(err)
  });
}

export default deleteEventMutation;