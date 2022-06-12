import {access, unlink} from 'node:fs/promises';
export const rm = async (_, [path]) => {
  try {
    await access(path);
    await unlink(path);
    return {resultData: 'Done'};
  } catch (err) {
    throw new Error(err.message)
  }
};
