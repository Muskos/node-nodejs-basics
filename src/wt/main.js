import { Worker } from "worker_threads";
import os from "os";

const DEFAULT_VALUE = 10;
const WORKER_PATH = "./src/wt/worker.js";

const performCalculations = async () => {
  const result = [];

  return new Promise((resolve, reject) => {
    const systemCpuCores = os.cpus();
    let workerCounter = 0;

    systemCpuCores.forEach((_, index) => {
      const worker = new Worker(WORKER_PATH, {
        workerData: DEFAULT_VALUE + index,
      });

      worker.on("message", (data) => {
        workerCounter++;
        result.push(data);

        if (workerCounter >= systemCpuCores.length) {
          resolve(result);
        }
      });
    });
  });
};

const result = await performCalculations();
console.log(result);
