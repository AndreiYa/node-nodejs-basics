import {join} from 'path';
import {access, rename} from "fs/promises";
import { constants } from 'fs';

export const rn = async (currentDir, res) => {
  // const path = join(currentDir, res[0])
  console.log(res[0])
  try {
    // await access(res[0])
    await access('C:/User/user/del.txt', constants.R_OK | constants.W_OK)
    const newPath = res[1].split('/')
    console.log(newPath)
    // rename(res[0], )
  } catch (err) {
    throw new Error(err.message)
  }
  // console.log(path)

}
