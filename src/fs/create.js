import fs from "fs";

const PATH = "./src/fs/files/fresh.txt";

const create = async () => {
  if (fs.existsSync(PATH)) {
    throw new Error("FS operation failed");
  }

  fs.writeFile(PATH, "I am fresh and young", function (err) {
    if (err) throw err;
  });
};

await create();
