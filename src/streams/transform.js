import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import {Transform} from 'node:stream';

export const transform = async () => {
  const rl = readline.createInterface({ input, output });
  await rl.question('Type some text stdin: ', (answer) => {
    const myTransform = new Transform({
      writableObjectMode: true,
      transform(chunk, encoding, callback) {
        callback(null, `stdout: ${answer}`);
      }
    });
    myTransform.setEncoding('utf-8');
    myTransform.on('data', (chunk) => process.stdout.write(chunk));
    myTransform.write(answer);
    rl.close();
  });
  // process.stdin.pipe(process.stdout);
};
transform()
