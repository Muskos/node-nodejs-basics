import fs from "fs";

const FILE_PATH = "./src/streams/files/fileToRead.txt";

const read = async () => {
  const lf = fs.createReadStream(FILE_PATH);
  lf.on("open", () => {
    lf.pipe(process.stdout);
  });
};

await read();
