const express = require("express");

const app = express();
const port = 5000;

const bootcamp = require("./bootcamp");
const json = require("./json");

app.get("/", (req, res) => {
  console.log("Hello from terminal");
  res.send("Hello DOM");
});

app.get("/bootcamp", (req, res) => {
  res.json(bootcamp);
});

app.get("/json", (req, res) => {
  res.json(json);
  console.log("hello from backend json");
});

app.get("/bootcamp/students/under22", (req, res) => {
  let youngStudents = bootcamp.students.filter((element) => element.age < 23);
  res.json(youngStudents);
});

app.listen(port, () => console.log(`Server is running from the port ${port}`));
