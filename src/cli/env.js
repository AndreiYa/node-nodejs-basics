export const parseEnv = () => {
  Object.entries(process.env).forEach(el => {
    console.log(`RSS_` + el.join('=') + '; ')
  })
};
parseEnv()
