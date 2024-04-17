const { client } = require('../dbConnection.js');
console.log("client: ");
console.log(client);
let collection = client.db().collection('cat');

function getAllCats(callback) {
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function postCat(cat, callback) {
    collection.insertOne(cat, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, result);
        }
    });
}

module.exports = {
    postCat,
    getAllCats
}