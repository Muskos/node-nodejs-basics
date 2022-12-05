import fs from "fs";

const FOLDER_PATH = "./src/fs/files/";

const list = async () => {
  if (!fs.existsSync(FOLDER_PATH)) {
    throw new Error("FS operation failed");
  }

  fs.readdir(FOLDER_PATH, function (err, files) {
    if (err) {
      throw new Error("FS operation failed");
    }

    console.log(files);
  });
};

await list();
