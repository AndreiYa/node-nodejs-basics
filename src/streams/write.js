import {createWriteStream} from 'node:fs'
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

export const write = async () => {
  const rl = readline.createInterface({ input, output });
  await rl.question('What do you think of Node.js? ', (answer) => {
    console.log( `Thank you for your valuable feedback: ${answer}`);
    const stream = createWriteStream('../files/fileToWrite.txt', 'utf-8')
    stream.on('open', () => console.log('Stream open'))
    stream.on('close', () => console.log('Stream close'))
    stream.on('error', (err) => stream.end('Some thing went wrong'))
    stream.on('aborted', () => stream.destroy())
    stream.write(answer)
    stream.end()
    rl.close();
  });
};
write()
