import chalk from 'chalk';

import app from './server';
import { port } from './config';

app.listen(port, () =>
  console.log(chalk.green(`Server is listening on port ${port}`))
);