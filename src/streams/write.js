import fs from "fs";

const FILE_PATH = "./src/streams/files/fileToWrite.txt";

const write = async () => {
  const file = fs.createWriteStream(FILE_PATH);

  process.stdin.pipe(file);
};

await write();
