import {Worker} from 'worker_threads';
import os from 'node:os';

const createWorker = (workerId, workerData) => {
  return new Promise((resolve) => {
    const worker = new Worker('./worker.js', {
      workerData
    })
    worker.on('online', () => console.log(`Worker ${workerId} start work with ${workerData} data`))
    worker.on('error', (err) => {
      console.log(`Worker ${workerId} error: ${err.message}`)
      resolve({data: null, status: "error"})
    })
    worker.on('message', (result) => {
      console.log(`Worker ${workerId} finish with result: ${result}`)
      resolve({data: result, status: "resolved"});
    })
  })
}
export const performCalculations = async () => {
  const workers = []
  for (let i = 0; i < os.cpus().length; i ++) {
    workers.push(createWorker(i + 1, i + 10))
  }
  return Promise.all(workers).then(worker => {
    console.log('Results', worker)
  })
};

await performCalculations();
