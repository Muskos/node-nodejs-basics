import path from "path";
import { release, version } from "os";
import { createServer } from "http";
import jsonA from "./files/a.json" assert { type: "json" };
import jsonB from "./files/b.json" assert { type: "json" };

import { dirname } from "path";
import { fileURLToPath } from "url";

import "./files/c.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = new URL("", import.meta.url).pathname;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = jsonA;
} else {
  unknownObject = jsonB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
