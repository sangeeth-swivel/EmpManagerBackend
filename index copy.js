const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/employeeManager";

const app = express();

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected..");
});

app.use(express.json());

const empRouter = require("./routes/employeeRoutes");

app.use("/employee", empRouter);

app.listen(4000, () => {
  console.log("Server Started port 4000");
});
