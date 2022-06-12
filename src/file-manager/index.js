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
      console.log(key, res);
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
        console.log(outputResult.currentDir)
        currentDir = outputResult.currentDir;
      }

    } catch (err) {
      console.error(err.message)
    }

    // console.log(key, res)


    // const commander = (command, path) => {
    //   console.log(command, path)
    // }
    // commander(key, res)
    // console.log(key, res)

    // switch (key) {
    //   case '.exit': {
    //     output.write(`Thank you for using File Manager, ${userName[0].toUpperCase()}${userName.slice(1)}!`)
    //     rl.close()
    //     break;
    //   }
    //   case 'up': {
    //     try {
    //       chdir(up(cwd()))
    //       output.write(`You are currently in ${cwd()}, enter you command:${os.EOL}`)
    //     } catch (e) {
    //       console.error(`Operation failed${os.EOL}`)
    //     }
    //     break;
    //   }
    //   case 'cd': {
    //     chdir(cd(cwd(), res))
    //     output.write(`You are currently in ${cwd()}, enter you command:${os.EOL}`)
    //     break;
    //   }
    //   case 'ls': {
    //     ls(cwd())
    //     break;
    //   }
    //   case 'os': {
    //     console.log(system(res))
    //     break;
    //   }
    //   case 'hash' : {
    //     console.log(hash(cwd(), res))
    //     break;
    //   }
    //   default: {
    //     output.write(`Invalid input${os.EOL}`)
    //     return;
    //   }
    // }
    fileManager()
  });
}
fileManager()
