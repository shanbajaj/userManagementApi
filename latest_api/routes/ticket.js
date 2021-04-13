import { Router } from 'express';
const args = { mergeParams: true }
const ticketRouter = Router(args)
import ticketController from '../controllers/tickets.js';
import authentication from '../middleware/authentication.js';
ticketRouter.route('/')
  .get(authentication,ticketController.getTicket)
  .post(authentication,ticketController.addTicket)

ticketRouter.route('/:id')
  .get(authentication,ticketController.getTicketById)
  .put(authentication,ticketController.updateTicket)
  .delete(authentication,ticketController.deleteTicket)

export default ticketRouter;
