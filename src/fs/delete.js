import {access, unlink} from 'node:fs'
export const remove = async () => {
    access('./files/fileToRemove.txt', (err => {
        if (err) throw new Error('FS operation failed')
        else {
            unlink('./files/fileToRemove.txt', err => {
                if (err) throw new Error(err.message)
                else {
                    console.log('Done')
                }
            })
        }
    }))
};
remove()
