import {access, readFile} from 'fs/promises';
import { join, isAbsolute } from 'node:path';

export const cat = async (currentDir, path) => {
  try {
    let pathTo;
    if (isAbsolute(path.join(''))) {
      pathTo = path.join('');
    } else {
      pathTo = join(currentDir, path.join(''));
    }
    await access(pathTo)
    const result = await readFile(pathTo, 'utf-8')

    return {resultData: result}
  } catch (err) {
    throw new Error(err.message)
  }
}
