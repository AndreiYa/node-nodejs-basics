import { join } from "node:path";

export const up = (currentDir) => {
  currentDir = join(currentDir, "..");
  return {currentDir}
}
