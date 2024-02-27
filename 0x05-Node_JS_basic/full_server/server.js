import express from 'express';
import router from './routes/index';

const app = express();
const hostname = 'localhost';
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});

module.exports = app;
