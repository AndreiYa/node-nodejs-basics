import {join} from 'path';
import {access, writeFile} from 'fs/promises';

export const add = async (currentDir, [fileName]) => {
    const path = join(currentDir, fileName);
  try {
    await access(path);
    return {resultData: 'File already exist!'};
  } catch (err) {
      try {
        await writeFile(path, '');
        return {resultData: 'File created!'};
      } catch (e) {
        console.error(e.message);
      }
    throw new Error(err.message);
  }

}
