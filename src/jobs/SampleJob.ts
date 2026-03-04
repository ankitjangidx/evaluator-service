import type { Job } from "bullmq";

import type { IJob } from "../types/bullMqJobDefinition.js";

export default class SampleJob implements IJob {
  name: string;
  payload: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }
  handle = () => {
    console.log("job handler called");
  };
  failed = (job?: Job) => {
    console.log("job failed:", job?.id);
  };
}
