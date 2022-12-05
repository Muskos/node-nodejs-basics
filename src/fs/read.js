import fs from "fs";

const FILE_PATH = "./src/fs/files/fileToRead.txt";

const read = async () => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(data);
  });
};

await read();
