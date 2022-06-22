import { open, close, writeFile } from 'node:fs';

export const create = async () => {
  open('files/fresh.txt', 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        throw new Error('FS operation failed')
      }
      throw err;
    }

    try {
      writeFile('files/fresh.txt', 'I am fresh and young', err => {
        if (err) throw new Error(err.message);
        console.log('File was created')
      })
    } finally {
      close( fd, (err) => {
        if (err) throw new Error(err.message);
      });
    }
  });
};
create()
