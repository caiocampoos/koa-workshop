const MongoClient = require('mongodb').MongoClient;
const { mongodb: { uri } } = require('../environment')
let mongoDB;

const setupDB = callback => {
  
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('koa-boilerplate');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };