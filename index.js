const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res, next) {
  res.send('Hello! Backlog Game is under construction.');
});

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});