const express = require('express');
const appRouter = require('./app');

const app = express();
const port = 3000;

app.get('/', appRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
