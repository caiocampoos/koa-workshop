import { CacheConfig, FetchFunction, QueryResponseCache, RequestParameters, Variables } from 'relay-runtime';

let GRAPHQL_ULR = 'http://localhost:3001/graphql'
if (process.env.GRAPHQL_URL) {
    GRAPHQL_ULR = process.env.GRAPHQL_URL
}
enum operationKind {
  MUTATION = 'mutation',
  QUERY = 'query',
}


const isMutation = (request: RequestParameters): boolean => {
  return request.operationKind === operationKind.MUTATION;
};

const isQuery = (request: RequestParameters): boolean => {
  return request.operationKind === operationKind.QUERY;
};

const forceFetch = (cacheConfig: CacheConfig): boolean => {
  return !!(cacheConfig && cacheConfig.force);
};

const fetchGraphQL = async (params: RequestParameters, variables: Variables) => {

  const response = await fetch(GRAPHQL_ULR, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.json();

  return json;
};

const responseCache = new QueryResponseCache({
  size: 250,
  ttl: 60000,
});

export const cacheHandler: FetchFunction = async (
  operation: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
) => {
  const id = operation.id || '';

  if (isMutation(operation)) {
    responseCache.clear();

    const mutationResult = await fetchGraphQL(operation, variables);

    return mutationResult;
  }

  if (isQuery(operation) && !forceFetch(cacheConfig)) {
    const fromCache = responseCache.get(id, variables);

    if (!fromCache) {
      return Promise.resolve(fromCache);
    }
  }

  const result = await fetchGraphQL(operation, variables);

  if (result) {
    responseCache.set(id, variables, result);
  }

  return result;
};