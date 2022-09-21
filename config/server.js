require("dotenv").config();

const express = require('express')
const app = express()
const MongoClient = require("mongodb").MongoClient;
const { Liquid } = require("liquidjs")

const engine = new Liquid({
    extname: ".liquid",
})

app.engine('liquid', engine.express());
app.set("view engine", "liquid");


const consign = require('consign')
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const moment = require("moment");

app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use((req, res, next)=>{
    res.locals.moment = moment;
    moment.locale('pt-br');
    next();
});


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app, MongoClient, check, validationResult);

module.exports = app, MongoClient, check, validationResult;


