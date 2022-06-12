import {access, rename} from 'node:fs/promises';
import {isAbsolute, join} from "node:path";

export const rn = async (currentDir, res) => {
  let pathTo;
  let path;

  if (isAbsolute(res[0])) {
    pathTo = res[0];
    path = pathTo.slice(0, (pathTo.lastIndexOf('/') + 1))
  } else {
    pathTo = join(currentDir, res[0]);
    path = pathTo.slice(0, (pathTo.lastIndexOf('\\') + 1))
  }

  try {
    await access(pathTo);
    await rename(pathTo, join(path, res[1]));
    return {resultData: 'Done'}
  } catch (err) {
    throw new Error(err.message)
  }
};
