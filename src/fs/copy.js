import fs from "fs";

const PATH = "./src/fs/files";
const COPY_PATH = "./src/fs/files_copy";

const copy = async () => {
  if (fs.existsSync(COPY_PATH)) {
    throw new Error("FS operation failed");
  }

  const files = fs.readdirSync(PATH);

  if (files && files.length > 0) {
    fs.mkdirSync(COPY_PATH);

    files.forEach((fileName) => {
      fs.copyFile(`${PATH}/${fileName}`, `${COPY_PATH}/${fileName}`, (err) => {
        if (err) throw err;
      });
    });
  }
};

copy();
