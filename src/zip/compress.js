import zlib from "zlib";
import fs from "fs";

const READ_FILE_PATH = "./src/zip/files/fileToCompress.txt";
const WRITE_FILE_PATH = "./src/zip/files/archive.gz";

const compress = async () => {
  const zip = zlib.createGzip();

  const read = fs.createReadStream(READ_FILE_PATH);
  const write = fs.createWriteStream(WRITE_FILE_PATH);

  read.pipe(zip).pipe(write);
};

await compress();
