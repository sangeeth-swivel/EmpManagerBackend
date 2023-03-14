const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();
require( './config/server');

const port = process.env.PORT;

// create express app
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require employees routes
require('./routes/employee.routes')(app);

app.get('/employee/list', () => {
});

// listen for requests
app.listen(port, () => {
    console.log("server running port is " + port);    
});