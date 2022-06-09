import os from 'node:os';
import { cwd, chdir } from 'node:process';
import { join } from "node:path";

export const up = (currentDir) => {
  currentDir = join(currentDir, "..");
  return {currentDir}
}
