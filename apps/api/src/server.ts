import Koa, { Request } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { graphqlHTTP, OptionsData } from 'koa-graphql';
import { GraphQLError } from 'graphql';

import  schema from './modules/graphql/schema';

const app = new Koa();
const router = new Router();

const graphQLSettingsPerReq = async (req: Request): Promise<OptionsData> => {  
    return {
      graphiql: true,
      schema,
      pretty: true,
      customFormatErrorFn: (error: GraphQLError) => {
        console.log(error.message);
        console.log(error.locations);
        console.log(error.stack);
  
        return {
          message: error.message,
          locations: error.locations,
          stack: error.stack,
        };
      },
    };
  };
  
  const graphQlServer = graphqlHTTP(graphQLSettingsPerReq);
  
  router.all('/graphql', graphQlServer);
1
  app.use(cors({ credentials: true }));
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());

export default app;