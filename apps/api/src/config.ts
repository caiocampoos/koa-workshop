import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(process.cwd());

dotenv.config({
  path: root('.env')
});

const { PORT, MONGO_URI, NODE_ENV } = process.env;