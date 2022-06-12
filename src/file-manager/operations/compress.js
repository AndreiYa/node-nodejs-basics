import {createReadStream, createWriteStream} from 'node:fs';
import {createBrotliCompress} from 'node:zlib';
import { pipeline } from "node:stream/promises";

export const compress = async (_, res) => {
  try {
    const brotliCompress = createBrotliCompress();
    const readStream = createReadStream(res[0]);
    const writeStream = createWriteStream(res[1], { flags: "wx" });

    await pipeline(readStream, brotliCompress, writeStream);
    return {resultData: 'Compress done'}
  } catch (err) {
    throw new Error(err.message)
  }
};
