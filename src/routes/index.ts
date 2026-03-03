import express from "express";

import v1Router from "./v1/index.js";

const appRouter = express.Router();

appRouter.use('/v1',v1Router)

export default appRouter;
