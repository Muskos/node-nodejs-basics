import fs from "fs";

const DELETE_PATH = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  if (!fs.existsSync(DELETE_PATH)) {
    throw new Error("FS operation failed");
  }

  fs.unlink(DELETE_PATH, function (err) {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
