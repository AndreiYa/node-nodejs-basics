import {createReadStream, createWriteStream} from 'node:fs';
import zlib from 'node:zlib';

export const compress = async (pathToFile, pathToDest) => {
  console.log(pathToFile, pathToDest)
  const gzip = zlib.createGzip();
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(pathToDest);

  readStream
      .on('error', (err => {
        throw new Error(err.message)
      }))
      .pipe(gzip)
      .pipe(writeStream)
      .on('finish', () => {
        return {resultData: 'done compressing'};
      });
};
