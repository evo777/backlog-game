const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
  res.send('Hello! Backlog Game is under construction.');
});

app.post('/add', (req, res, next) => {
  // Save to database
  try {
    console.log("req.body: ", req.body);
  } catch (e) {
    res.send(400).send("unable to save to database");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});