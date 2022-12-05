import zlib from "zlib";
import fs from "fs";

const WRITE_FILE_PATH = "./src/zip/files/fileToCompress.txt";
const READ_FILE_PATH = "./src/zip/files/archive.gz";

const decompress = async () => {
  const fileContents = fs.createReadStream(READ_FILE_PATH);
  const writeStream = fs.createWriteStream(WRITE_FILE_PATH);
  const unzip = zlib.createGunzip();

  fileContents.pipe(unzip).pipe(writeStream);
};

await decompress();
