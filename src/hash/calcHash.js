import crypto from 'node:crypto';
import {readFile} from 'fs/promises';
export const calculateHash = async () => {
  const hash = crypto.createHash('sha256')
    .update(await readFile('./files/fileToCalculateHashFor.txt', 'utf-8'))
      .digest('hex')
  console.log(hash)
};
calculateHash()
