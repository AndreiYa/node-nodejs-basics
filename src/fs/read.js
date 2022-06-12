import {readFile, access} from 'node:fs'
export const read = async () => {
    access('./files/fileToRead.txt', (err => {
      if (err) throw new Error('FS operation failed')
      else {
        readFile('./files/fileToRead.txt', 'utf-8', ((err, data) => {
          if (err) throw new Error(err.message)
          else {
            console.log(data)
          }
        }))
      }
    }))
};
read()
