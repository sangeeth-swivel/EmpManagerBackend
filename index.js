const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan");
require( './config/server');

// create express app
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require employees routes
const empRouter = require('./routes/employee.routes');
app.use("/employee", empRouter);

app.get('/', (req, res) => {
        res.status(200).json("home page")
});

// listen for requests
app.listen(3080, () => {
    console.log("server running port is 3080");    
});