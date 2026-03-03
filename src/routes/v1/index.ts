import type { Request, Response } from "express";
import express from "express";

const v1Router = express.Router();

v1Router.get("/", (req: Request, res: Response) => {
  res.send("v1");
});

export default v1Router;
