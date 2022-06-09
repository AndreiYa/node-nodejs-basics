import {join, isAbsolute} from 'node:path';

export const cd = (currentDir, [newPath]) => {
    let pathTo;
    try {
        if (isAbsolute(newPath)) {
            pathTo = newPath;
        } else {
            pathTo = join(currentDir, newPath);
        }
    } catch {
        throw new Error('Operation failed');
    }
    return {currentDir: pathTo};
}
