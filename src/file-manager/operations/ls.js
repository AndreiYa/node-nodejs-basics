import {readdir, stat} from 'node:fs/promises';
import {join} from 'path';

export const ls = async (pathToDir) => {
  const result = [];
  try {
    const fileList = await readdir(pathToDir);
    const readResult = await Promise.all(
        fileList.map(async (file) => {
          try {
            const stats = await stat(join(pathToDir, file));
            return result.push({
              name: file,
              type: stats.isDirectory() ? 'Directory' : 'File',
              size: stats.size
            })
          } catch (e) {
              console.error(e.message)
            };
          })
    )
    return {currentDir: pathToDir, resultData: result}
  } catch {
    throw new Error('Operation failed');
  }
}

