import {createReadStream, createWriteStream} from 'node:fs';
import zlib from 'node:zlib';

export const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const readStream = createReadStream('./files/archive.gz');
  const writeStream = createWriteStream('./files/fileToCompress.txt')

  readStream
      .pipe(gunzip)
      .pipe(writeStream)
      .on('finish', () => console.log('done decompressing'));
};
decompress()
