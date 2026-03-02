import express, { Express } from "express";
import { PORT } from "./config/server.config";


const app: Express = express();


app.listen(PORT, () => {
  console.log(`server is listening on: ${PORT}`);
});
