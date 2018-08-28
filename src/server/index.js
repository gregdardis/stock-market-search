import express from 'express';
import chalk from 'chalk';

import apiRouter from './api';
import { port } from './config';

const server = express();

server.use('/api', apiRouter);

// if statement stops a second server from trying to run on the same
// port when tests are running on server functions
if (!module.parent) {
  server.listen(port, () =>
    console.log(chalk.green(`Server is listening on port ${port}`))
  );
}