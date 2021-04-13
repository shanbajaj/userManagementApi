import user from './user.js';
import ticket from './ticket.js';
const initRoutes = (app) => {
  app.use('/users', user);
  app.use('/tickets', ticket);
}

export default initRoutes;
