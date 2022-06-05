import {access, readdir} from 'node:fs'
export const list = async () => {
    access('./files', (err => {
      if (err) throw new Error('FS operation failed')
      else {
        readdir('./files', ((err, files) => {
          const resultArr = []
          files.forEach(el => {
            resultArr.push(el)
          })
          console.log(resultArr)
        }))
      }
    }))
};
list()
