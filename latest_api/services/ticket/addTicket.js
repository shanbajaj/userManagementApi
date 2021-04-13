import models from '../../models/index.js';
const addTicket= async ({userId,ticketName,ticketPrice}) => {
    const data = {userId,ticketName,ticketPrice};
    try {
      const user = await models.Ticket.create(data);
      return user;
    } catch (error) {
      throw error;
    }
};
export default addTicket;

