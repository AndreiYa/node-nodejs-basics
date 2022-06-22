export const parseArgs = () => {
 const args = process.argv
  const [executor, file, ...rest] = args
  rest.forEach((el, idx) => {
    if (el.charAt(0) === '-') {
      console.log(`${el.replace('--', '')} is ${rest[idx+1]}`)
    }
  })
};
parseArgs()
