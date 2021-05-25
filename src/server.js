const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  global.console.log(`App is running on http://localhost:${PORT}`)
);
