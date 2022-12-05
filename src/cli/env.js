const parseEnv = () => {
  const result = [];

  Object.entries(process.env).map((item) => {
    if (item[0].includes("RSS_")) {
      result.push(item.join("="));
    }
  });

  console.log(result.join("; "));
};

parseEnv();
