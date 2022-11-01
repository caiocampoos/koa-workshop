import { commitMutation, graphql } from 'react-relay';
import environment from '../../../environment';

const mutation = graphql`
  mutation updateEventMutation($content: String, $_id: ID) {
    updateEvent(_id: $_id, content: $content) {
      _id
      content
    }
  }
`;

function updateEventMutation(_id, content) {
  const variables = {
    _id,
    content
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const newUpdatedEvent = store.getRootField('updateEvent');
      const root = store.getRoot();
      const events = root.getLinkedRecords('events');
      const newEvents = events.filter(v => v.getValue('_id') !== _id);

      root.setLinkedRecords([...newEvents, newUpdatedEvent], 'events');
    },
    onError: err => console.error(err)
  });
}

export default updateEventMutation;