import getUserService from '../services/user/get.js'
import addUserService from '../services/user/add.js'
import updateUserService from '../services/user/update.js'
import deleteUserService from '../services/user/delete.js'
import {SUCCESS,error} from '../helper/message.js'
import response from '../helper/response.js'

const userController = {
  getUser: async (req, res) => {
    try {
      const users = await getUserService.getData();
      response.sendresponse(req,res,{data: users,message: SUCCESS.getUser});
    } catch(error) {
      response.errorresponse(req,res,{message: error.getUser});
    }
  },
  getUserById: async(req, res) => {
    try{
      const user = await getUserService.getUserById(req.params.id);
      if(user){
        response.sendresponse(req, res,{data: user, message: SUCCESS.getUser});
      }else{
        response.errorresponse(req,res,{message: error.getUser});
      }
    } catch(error) {
      response.errorresponse(req,res);
      }
    },
  addUser: async(req, res) => {
    try{
      const user = await addUserService(req.body);
      response.sendresponse(req, res,{data: user,message: SUCCESS.addUser});
    } catch(error){
      console.log(error),
      response.errorresponse(req,res,{message: error.addUser});
    }
  },
  updateUser: async(req, res) => {
    try{
      const user = await updateUserService(req.params.id,req.body);
      response.sendresponse(req, res,{data: user, message: SUCCESS.updateUser});
    } catch(error){
      response.errorresponse(req,res,{message: error.updateUser});
    }
  },
  deleteUser: async(req, res) => {
    try{
      const user = await deleteUserService(req.params.id);
      if(user){
        response.sendresponse(req, res,{data: user, message: SUCCESS.deleteUser});
      } else {
        response.errorresponse(req,res,{message: error.deleteUser});
      }
    } catch(error){
      response.errorresponse(req,res);
    }
  }
}

export default userController;
