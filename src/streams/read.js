import {createReadStream} from 'node:fs';
export const read = async () => {
  const stream = createReadStream('./files/fileToRead.txt')

  stream.pipe(process.stdout)
  stream.on('error', (err) => {
        throw new Error(err.message)
      })
};
read()
