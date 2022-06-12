import {access, mkdir, readdir, readFile, writeFile, rmdir} from 'node:fs';

export const copy = async () => {
  access('./files', err => {
    if (err) throw new Error('FS operation failed')
  })
  access('./files-copy', err => {
    if (err) {
      dirCopy()
    } else {
      readdir('./files-copy', (err, files) => {
        if (err) throw new Error(err.message)
        else {
          if (!files.length) {
            rmdir('./files-copy', () => {})
            dirCopy()
          } else {
            throw new Error('FS operation failed')
          }
        }
      })
    }
  })

  const dirCopy = () => {
    mkdir('./files-copy', err => {
      if (err) throw new Error(err.message)
      console.log('Directory created')
    })
    readdir('./files', (err, files) => {
      if (err) throw new Error(err.message)
      else {
        files.forEach(el => {
          readFile(`./files/${el}`, 'utf8', (err, data) => {
            if (err) throw new Error(err.message);
            else {
              writeFile(`./files-copy/${el}`, data, (err => {
                if (err) throw new Error(err.message);
              }))
            }
          })
        })
      }
    })
  }
};
copy()
