import getTicketService from '../services/ticket/getTicket.js'
import addTicketService from '../services/ticket/addTicket.js'
import updateTicketService from '../services/ticket/updateTicket.js'
import deleteTicketService from '../services/ticket/deleteTicket.js'
import { SUCCESS, error } from '../helper/message.js'
import response from '../helper/response.js'

const ticketController = {
  getTicket: async (req, res) => {
    try {
      const userTickets = await getTicketService.getTicket();
      response.sendresponse(req, res, { data: userTickets, message: SUCCESS.getUser });
    } catch (error) {
      response.errorresponse(req, res, { message: error.getUser });
    }
  },
  getTicketById: async (req, res) => {
    try {
      const userTicket = await getTicketService.getTicketById(req.params.id);
      if (userTicket) {
        response.sendresponse(req, res, { data: userTicket, message: SUCCESS.getUser });
      } else {
        response.errorresponse(req, res, { message: error.getUser });
      }
    } catch (error) {
      response.errorresponse(req, res);
    }
  },
  addTicket: async (req, res) => {
    try {
      const userTicket = await addTicketService(req.body);
      response.sendresponse(req, res,{data: userTicket, message: SUCCESS.addUser});
    } catch(error){
      response.errorresponse(req,res,{message: error.addUser});
    }
  },
  updateTicket: async (req, res) => {
    try {
      const userTicket = await updateTicketService(req.params.id, req.body);
      response.sendresponse(req, res,{data: userTicket, message: SUCCESS.updateUser});
    } catch(error){
      response.errorresponse(req,res,{message: error.updateUser});
    }
  },
  deleteTicket: async (req, res) => {
    try {
      const userTicket = await deleteTicketService(req.params.id);
      if (userTicket) {
        response.sendresponse(req, res,{data: userTicket, message: SUCCESS.deleteUser});
      } else {
        response.errorresponse(req,res,{message: error.deleteUser});
      }
    } catch(error){
      response.errorresponse(req,res);
    }
  }
}

export default ticketController;
