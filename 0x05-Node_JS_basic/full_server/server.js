const express = require('express');
const routing = require('./routes/index');

const app = express();
const hostname = 'localhost';
const port = 1245;

app.use('/', routing);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});

module.exports = app;
