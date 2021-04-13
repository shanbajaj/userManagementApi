import express, { json } from 'express';
import initRoutes from './routes/index.js';
const app = express();
import db from './config/database.js';
db.authenticate()
  .then(() => console.log('Databse connected'))
  .catch(err => console.log('Error ' + err))
app.use(json());
app.use((req, res, next) => {
  console.log('req method=====>', req.method);
  console.log('req method=====>', req.path);
  console.log('req body=====>', req.body);
  next();
});
initRoutes(app);
app.use('*', (req, res) => {
  res.status(404).send({ error: 'Not Found!' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});

