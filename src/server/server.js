const Koa = require('koa');
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');
const Router = require('koa-router');
const { setupDB } = require('./infra/mongodb')
const schema = require('./graphql/schema');
const serve = require("koa-static");
const cors = require("koa-cors")

const app = new Koa();

setupDB(v => console.log(v));

app.use(cors());   

app.use(serve('dist'));


app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
    ),
    );

app.listen(4000)