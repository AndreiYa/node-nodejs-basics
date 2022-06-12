import {access, readFile} from 'fs/promises';
import {join} from 'path';

export const cat = async (_, [pathTo]) => {
  try {
    const path = join(pathTo)
    await access(path)
    const result = await readFile(path, 'utf-8')
    return {resultData: result}
  } catch (err) {
    throw new Error(err.message)
  }
}
