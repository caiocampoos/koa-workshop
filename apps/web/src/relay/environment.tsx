import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { cacheHandler } from './network';

export const RelayEnvironment = new Environment({
  network: Network.create(cacheHandler),
  store: new Store(new RecordSource()),
});