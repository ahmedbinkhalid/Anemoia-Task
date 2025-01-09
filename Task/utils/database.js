const mongoDb = require('mongodb');
const MongoClient = mongoDb.MongoClient;
require('dotenv').config;

const MongoConnect = callback =>{
    MongoClient.connect(process.env.Mongo)
        .then(client =>{
            console.log('Connected to MongoDB', "Port", process.env.PORT);
            global.db = client.db("flokers");
            callback(client);
        })
        .catch(err=>{
            console.log('Error connecting to MongoDB', err);
        })

}

module.exports = MongoConnect;