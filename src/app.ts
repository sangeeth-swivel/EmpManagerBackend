import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import createServer from "./utils/server";
// import swaggerUi from "swagger-ui-express";

// const swaggerDocs = require("../swagger.json");

const app = createServer();
const port = process.env.PORT || config.get<number>("port");

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(port, async () => {
  log.info(`Server started on port ${port}`);
  await connect();
});
