const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require('dotenv').config();
const MongoConnect = require('./utils/database');

const userRouter = require('./Routes/userRouter');


const app = express();

app.use(cookieParser());
app.use(cors());

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb' , extended: true}));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


MongoConnect(client =>{
    app.locals.db = client.db('flokers');
    app.use('/api', userRouter);
    app.listen(process.env.PORT);

});
