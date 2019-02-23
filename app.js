const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./user/user.router');

mongoose.connect(
    'mondodb://localhost/newRegoster',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },() =>{
        console.log('connect to MongoDB...');
    }
);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/user',userRouter);

app.listen(3000);



module.exports = app;