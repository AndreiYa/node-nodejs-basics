import {createReadStream, createWriteStream} from 'node:fs';
import zlib from 'node:zlib';

export const compress = async () => {
  const gzip = zlib.createGzip();
  const readStream = createReadStream('./files/fileToCompress.txt');
  const writeStream = createWriteStream('./files/archive.gz');

  readStream
      .pipe(gzip)
      .pipe(writeStream)
      .on('finish', () => console.log('done compressing'));
};
compress()
