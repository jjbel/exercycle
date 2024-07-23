const express = require("express");
const { resolve } = require("path");

const app = express();

app.use(express.static(resolve("frontend")));
app.get("/data", (req, res) => {
  res.sendFile(resolve("data/data.json"));
});

app.listen(5000, () => console.log(`Server started.`));
