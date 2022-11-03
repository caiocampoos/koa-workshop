import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchQuery(
  operation, 
  variables) {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });
  const json = await response.json();
  return await Promise.resolve(json);
}


const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;