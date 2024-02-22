/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { basicLib } from '@esm-test/basic-lib';
import { lowercase } from '@esm-test/cjs-lib';
import { lowercase as esmLowercase } from '@esm-test/esm-lib';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-10565!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(basicLib());
  console.log(lowercase('Hello World'));
  console.log(esmLowercase('Hello World'));
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
