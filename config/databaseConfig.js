const mongoose = require("mongoose");
const DB = process.env.DB_URL;

const databaseConfig = () => {
  mongoose
    .connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((result) => {
      console.log("Connection Successful on 'DB' Cluster"+ result);
    })
    .catch((err) => {
      console.log("Connection NOT Successful" + err);
    });
};

module.exports = databaseConfig;
