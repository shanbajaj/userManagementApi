import models from '../../models/index.js';
const deleteTicket = async (id) => {
  try {
    const userTicket = await models.Ticket.findByPk(id);
    const data = await userTicket.destroy();
    return userTicket;
  } catch (error) {
    throw error;
  }
}
export default deleteTicket;
