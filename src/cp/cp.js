import {fork} from 'child_process';

export const spawnChildProcess = async (args) => {
  const forkProcess = fork('./files/script.js', args, { silent: true })
  forkProcess.on("spawn", () => console.log('Spawn child process'))
  forkProcess.on("exit", (code) => console.log('Exit with: ' + code));

  forkProcess.stdout.pipe(process.stdout);

  forkProcess.stdout.on("data", (chunk) => console.log(`Message from child process: ${chunk}`));

  process.stdin.pipe(forkProcess.stdin);
};
await spawnChildProcess()
