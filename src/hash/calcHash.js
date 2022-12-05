import crypto from "crypto";
import fs from "fs";

const FILE_PATH = "./src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(crypto.createHash("sha256").update(data).digest("hex"));
  });
};

await calculateHash();
