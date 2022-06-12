import {createReadStream, createWriteStream} from 'node:fs';
import {createBrotliDecompress} from 'node:zlib';
import {pipeline} from "node:stream/promises";

export const decompress = async (_, res) => {
  // const fileName = res[0].split('/');
  try {
    const brotliDecompress = createBrotliDecompress();
    const writeStream = createWriteStream(res[1], { flags: "wx" });
    const readStream = createReadStream(res[0]);

    await pipeline(readStream, brotliDecompress, writeStream);
    return {resultData: 'Decompress done'}
  } catch (err) {
    throw new Error(err.message)
  }
};
