import express from "express";
import cors from "cors";
import router from "../routes";
var bodyParser = require("body-parser");

const createServer = () => {
  const app = express();
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
  app.use(bodyParser.json());  // parse application/json
  app.use(cors());
  app.use("/employee", router);

  return app;
};

export default createServer;
