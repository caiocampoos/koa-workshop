import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(process.cwd());
dotenv.config({
  path: root('/.env')
});

const { GRAPHQL_URL } = process.env;