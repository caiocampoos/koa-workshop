import { commitMutation, graphql } from 'react-relay';
import environment from '../../../environment';

const mutation = graphql`
  mutation createEventMutation($content: String) {
    createEvent(content: $content) {
      _id
      content
    }
  }
`;

function createEventMutation(content) {
  const variables = {
    content
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const payload = store.getRootField('createEvent');
      const root = store.getRoot();
      const events = root.getLinkedRecords('events');

      const newEvents = [...events, payload];
      root.setLinkedRecords(newEvents, 'events');
    },
    onError: err => console.error(err)
  });
}

export default createEventMutation;