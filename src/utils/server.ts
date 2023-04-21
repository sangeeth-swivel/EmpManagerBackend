import express from "express";
import cors from "cors";
import router from "../routes";

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  let corsOptions = {
    origin: 'https://emp-manager-frontend-9qte3gt4d-sangeeth-swivel.vercel.app'
  }
  app.use(cors(corsOptions));
  app.use("/employee", router);

  return app;
};

export default createServer;
