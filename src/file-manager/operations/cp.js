import {access, writeFile, readFile} from 'node:fs/promises';

export const cp = async (_, path) => {
  const fileName = path[0].split('/')
  try {
    await access(path[0]);
    const content = await readFile(path[0], 'utf-8');
    await writeFile(path[1] + '/' + fileName[fileName.length -1], content);
    return {resultData: 'Done'};
  } catch (err) {
    throw new Error(err.message)
  }
}
