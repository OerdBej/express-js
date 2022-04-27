const express = require("express");

const app = express();
const port = 5000;

const bootcamp = require("./bootcamp");

app.get("/", (req, res) => {
  console.log("Hello from terminal");
  res.send("Hello DOM");
});

app.get("/bootcamp", (req, res) => {
  res.json(bootcamp);
});

app.listen(port, () => console.log(`Server is running from the port ${port}`));
