import express from 'express';

import apiRouter from './api';
import { port } from './config';

const app = express();

app.use('/api', apiRouter);

// if statement stops a second server from trying to run on the same
// port when tests are running on server functions
if (!module.parent) {
  app.listen(port, () =>
    console.log(`app is listening on port ${port}`)
  );
}