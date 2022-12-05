import fs from "fs";

const ORIGINAL_PATH = "./src/fs/files/wrongFilename.txt";
const RENAME_PATH = "./src/fs/files/wrongFilename.md";

const rename = async () => {
  if (fs.existsSync(RENAME_PATH) || !fs.existsSync(ORIGINAL_PATH)) {
    throw new Error("FS operation failed");
  }

  fs.rename(ORIGINAL_PATH, RENAME_PATH, function (err) {
    if (err) console.log("FS operation failed");
  });
};

await rename();
