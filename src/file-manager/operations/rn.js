import {access, rename} from 'node:fs/promises';

export const rn = async (currentDir, res) => {
  const path = res[0].split('/');
  path.pop();
  try {
    await access(res[0]);
    await rename(res[0], res[1]);
    return {resultData: 'Done'};
  } catch (err) {
    throw new Error(err.message)
  }
};
