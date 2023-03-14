const express = require('express');
const bodyParser = require('body-parser');
// const dotenv = require("dotenv");
const morgan = require("morgan");
// dotenv.config();
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
const empRouter = require('./routes/employee.routes');
app.use("/employee", empRouter);

app.get('/', (req, res) => {
        res.status(200).json("home page")
});

// listen for requests
app.listen(port, () => {
    console.log("server running port is " + port);    
});