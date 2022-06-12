import os from 'node:os';

export const system = (_, [params]) => {
  switch (params) {
    case '--EOL': {
      return {resultData: JSON.stringify(os.EOL)};
    }
    case '--cpus': {
      return {resultData: os.cpus()};
    }
    case '--homedir' : {
      return {resultData: os.homedir()};
    }
    case '--username' : {
      return {resultData: os.userInfo().username};
    }
    case '--architecture' : {
      return {resultData: os.arch()};
    }
    default: {
      return {resultData: `Invalid input${os.EOL}`};
    }
  }
}
