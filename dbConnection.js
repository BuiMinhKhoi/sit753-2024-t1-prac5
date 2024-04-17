const { MongoClient, ServerApiVersion } = require('mongodb');
const { MONGODB_URI } = require('./constants/constants');
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
client.connect();
console.log(client);


module.exports = {client}