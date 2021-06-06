import express, {Response, Request, NextFunction} from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import fs from 'fs';
import morgan from 'morgan';

import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import userRouter from './resources/users/user.router';

const logStream = fs.createWriteStream(
  path.join(__dirname, '../logRequest/access.log'),
  { flags: 'a' }
);

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(morgan('combined', { stream:logStream }));
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req:Request, res:Response, next:NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:id/tasks', taskRouter);



app.use(
  (
    error: express.ErrorRequestHandler,
    _req: express.Request,
    response: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(error);
    response.status(500).json({ msg: 'Something broke!' });
    _next();
  }
);


export default app;
