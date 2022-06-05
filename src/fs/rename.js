import * as fs from 'node:fs'
export const rename = async () => {
  fs.access('./files/wrongFilename.txt', err => {
    if (err) throw new Error('FS operation failed')
    else {
      fs.access('./files/properFilename.md', err => {
        if (err) {
          fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err => {
            if (err) throw new Error(err.message);
            console.log('Done')
          }))
        } else {
          throw new Error('FS operation failed')
        }
      })
    }
  })
};
rename()
