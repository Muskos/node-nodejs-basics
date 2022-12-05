import { spawn } from "child_process";

const SPAWN_PATH = "./src/cp/files/script.js";

const spawnChildProcess = async (...args) => {
  spawn("node", [SPAWN_PATH, ...args], {
    stdio: "inherit",
    ...args,
  });
};

spawnChildProcess("arg1", "arg2", "arg3");
