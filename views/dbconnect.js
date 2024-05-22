const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'Tasksgroup';
const client = new MongoClient(url);

// method to connect db to node

async function dbConnect(){
    let result = await client.connect();
    db = result.db(dbName);
    let collection = db.collection('tasks');
    return collection;
    

}
module.exports = dbConnect;