import  {LOCAL_PORT}   from './common/config';
// eslint-disable-next-line import/no-unresolved
import app from './app';


app.listen(LOCAL_PORT, () =>
  global.console.log(`App is running on http://localhost:${LOCAL_PORT}`)
);
