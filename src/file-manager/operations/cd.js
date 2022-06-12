import { join, isAbsolute } from 'node:path';
import { access } from 'fs/promises';

export const cd = async (currentDir, newPath) => {
    if (newPath.length > 1) {
        newPath = newPath.join(' ')
    }
    let pathTo;
    try {
        if (isAbsolute(newPath)) {
            pathTo = newPath;
        } else {
            pathTo = join(currentDir, newPath);
        }
        await access(pathTo)
    } catch {
        throw new Error('Operation failed');
    }
    return {currentDir: pathTo};
}
