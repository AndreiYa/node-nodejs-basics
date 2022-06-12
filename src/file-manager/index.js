import * as readline from 'node:readline';
import os from 'node:os';
import {stdin as input, stdout as output, cwd, chdir} from 'node:process';
import operations from './operations/index.js';

const args = process.argv;
let currentDir = cwd();
const homeDir = os.homedir();
const [executor, file, ...rest] = args;
let userName = '';

if (rest[0]) {
  userName = rest[0].split('=')[1];
  const user = userName ? userName : process.env.username;
} else {
  console.error('No args -- username=username, use dafault process UserName');
  userName = process.env.username;
}

output.write(`Welcome to the File Manager, ${userName[0].toUpperCase()}${userName.slice(1)}!${os.EOL}`);
chdir(homeDir);
currentDir = homeDir;
const rl = readline.createInterface({input, output});

rl.on("SIGINT", () => process.emit("SIGINT"));
process.on("SIGINT", () => {
  console.log(`${os.EOL}Thank you for using File Manager, ${userName[0].toUpperCase()}${userName.slice(1)}!`);
  process.exit();
});

export const fileManager = async () => {
  rl.question(
      `You are currently in ${currentDir}, enter you command:${os.EOL}`, async (input) => {
    try {
      const [key, ...res] = input.split(' ');
      if (key === '.exit') {
        output.write(`Thank you for using File Manager, ${userName[0].toUpperCase()}${userName.slice(1)}!`)
        rl.close()
        process.exit()
      }

      if (!operations[key]) {
        throw new Error("Invalid input");
      }

      const outputResult = await operations[key](currentDir, res);
      if (outputResult.resultData) console.log(outputResult.resultData);

      if (outputResult.currentDir && outputResult.currentDir !== currentDir) {
        currentDir = outputResult.currentDir;
      }

    } catch (err) {
      console.error(err.message)
    }
    await fileManager()
  });
}
fileManager()
