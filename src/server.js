const Koa = require('koa');
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');
const { setupDB } = require('./infra/mongodb')
const schema = require('./graphql/schema');

const app = new Koa();

setupDB(v => console.log(v));

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  ),
);

app.listen(4000);