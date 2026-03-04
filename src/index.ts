import express from "express";

import { PORT } from "./config/server.config.js";
import SampleQueueProducer from "./producers/SampleQueueProducer.js";
import SampleWorker from "./workers/SampleWorker.js";




const app = express();

app.listen(PORT, () => {
  console.log(`server is listening on: ${PORT}`);
});


SampleWorker("SampleQueue");
void (async () => {
  try {
    await SampleQueueProducer("SampleJob", {
      name: "ankit",
      data: "testing",
    });
  } catch (error) {
    console.log(error);
  }
})();