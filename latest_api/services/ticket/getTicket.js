import models from '../../models/index.js';

const getTicket = async () => {
  try {
    const tickets = await models.Ticket.findAll({include: models.User});
    return tickets;
  } catch (error) {
    throw error;
  }
};

const getTicketById = async (id) => {
  try {
    const userTicket = await models.Ticket.findOne({where:{id},include: models.User});
    return userTicket;
  } catch (error) {
    throw error;
  }
}

export default { getTicketById, getTicket };
