import type { Job } from "bullmq";
import { Worker } from "bullmq";

import redisConnection from "../config/redis.config.js";
import SampleJob from "../jobs/SampleJob.js";

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
        if (job.name === "SampleJob") {
          console.log("samplejob worker kicking",job)
        const sampleJobInstanse = new SampleJob(job.data);
        sampleJobInstanse.handle();
      }
    },
    {
      connection: redisConnection,
    },
  );
}

