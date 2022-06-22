import path from 'path';
import { release, version } from 'node:os';
import { createServer } from 'http';
import { readFileSync } from "fs";
const a = JSON.parse(readFileSync("./files/a.json", 'utf-8'));
const b = JSON.parse(readFileSync("./files/b.json", 'utf-8'));
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import c from './files/c.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});
