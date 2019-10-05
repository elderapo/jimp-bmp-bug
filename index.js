const { promises: fs } = require("fs");
const path = require("path");
const jimp = require("jimp");

const main = async () => {
  const fromFilePath = path.join(__dirname, "from.bmp");

  // #1
  const fromData = await fs.readFile(fromFilePath);
  const jimpImage = await jimp.read(fromData);

  // #2
  //   const jimpImage = await jimp.read(fromFilePath);

  await jimpImage.writeAsync(path.join(__dirname, "to.bmp"));
};

main();
