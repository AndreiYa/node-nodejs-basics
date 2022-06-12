import crypto from 'node:crypto';
import {readFile} from 'fs/promises';
import {join} from 'path';

export const hash = async (currentDir, [file]) => {
  try {
    const hash = crypto.createHash('sha256')
        .update(await readFile(file, 'utf-8'))
        .digest('hex');
    return {resultData: hash};
  } catch {
    throw new Error('Operation failed');
  }
}
