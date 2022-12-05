let result = "";

const transform = async () => {
  process.stdin
    .setEncoding("utf8")
    .resume()
    .on("data", (buf) => {
      console.log(buf.split("").reverse().join(""));
    });
};

await transform();
