import models from '../../models/index.js';
const updateTicket = async (id, { userId, ticketName, ticketPrice }) => {
  try {
    const userTicket = await models.Ticket.findByPk(id);
    if (!userTicket) {
      return null;
    }
    userTicket.ticketName = ticketName;
    userTicket.ticketName = ticketPrice;
    userTicket.save();
    return userTicket;
  } catch (error) {
    throw error;
  }
}
export default updateTicket;
