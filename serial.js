const { readFileSync, writeFileSync } = require("node:fs");
const { resolve } = require("path");

const path = resolve("data/data.json");
console.log(path);

update = () => {
  contents = JSON.parse(readFileSync(path, { encoding: "utf8" }));
  contents.count += 1;
  writeFileSync(path, JSON.stringify(contents));
  console.log(contents);
};

setInterval(update, 1000);
