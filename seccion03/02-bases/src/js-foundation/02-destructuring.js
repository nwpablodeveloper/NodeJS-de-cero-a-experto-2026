console.clear();

const { pid, execPath, debugPort, env, SHELL } = process;


console.log(process);
console.table({
    pid,
    execPath,
    debugPort,
    env: env.PORT,
    SHELL
});