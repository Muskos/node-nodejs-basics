const parseArgs = () => {
  const result = process.argv.reduce((acc, value, index, arr) => {
    if (value[0] !== "-" || value[1] !== "-") {
      return acc;
    }

    return [...acc, `${value.replace("--", "")} is ${process.argv[index + 1]}`];
  }, []);
  console.log(result.join(", "));
};

parseArgs();
