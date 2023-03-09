const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/users', (req, res) => {
  res.send('Users Page')
})

function loggingMiddleware(req, res, next) {
  console.log('Inside Middleware')
}

app.listen(4000, () => console.log('Server Started'))
// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const databaseConfig = require('./config/databaseConfig');

// Load the Employee model
// const Employee = require('../models/employee');

// Add middleware
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

// Define API routes
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.get("/", (req, res) => {
//   res.render("home", { variableName: "Hello Geeks!" });
// });

// app.listen(4000, () => {
//   console.log("Server listening on port 4000");
// });

// databaseConfig();
// app.use("/employee", employeeRoutes);