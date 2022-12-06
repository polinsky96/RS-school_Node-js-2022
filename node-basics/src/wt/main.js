import { fileURLToPath } from 'url';
import path from 'path';

import { Worker, threadId } from 'node:worker_threads';
import os from 'os'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const coresLength = os.cpus().length;
    const workerPath = path.join(__dirname, './worker.js');
    const workersPool = {};
    let waitingWorkers = [];
    const results = [];

    const registerWorker = () => {
        const worker = new Worker(workerPath);
        workersPool[worker.threadId] = worker;
    }

    const isCompleteResult = () => {
        if (waitingWorkers.length === 0) {
            logResult();
        }
    }

    const addWaitingWorker = (worker) => {
        waitingWorkers.push(worker.threadId);
    }

    const removeWaitingWorker = (worker) => {
        waitingWorkers = waitingWorkers.filter(w => w !== worker.threadId);
    }

    for (let i = 0; i < coresLength; i++) {
        registerWorker();
    }

    for (let worker in workersPool) {
        const currentWorker = workersPool[worker];

        currentWorker.postMessage(9 + currentWorker.threadId);
        addWaitingWorker(currentWorker);

        currentWorker.on('message', (result) => {
            results.push({
                status: 'resolved',
                data: result
            });
            
            removeWaitingWorker(currentWorker);

            isCompleteResult();
        })
        
        currentWorker.on('error', (error) => {            
            results.push({
                status: error,
                data: null
            });

            removeWaitingWorker(currentWorker);

            isCompleteResult();
        })
    }

    const logResult = () => {
        console.log(results);
    }
};

await performCalculations();