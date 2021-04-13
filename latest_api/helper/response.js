import {SUCCESS,error} from "./message.js";
const sendresponse = (req,res,obj) => {
  const sentCode = (obj && obj.status) || 200;
  return res.status(sentCode).send({
    message: (obj && obj.message) || SUCCESS.addUser,
    data: (obj && obj.data) || []
  });
}
const errorresponse = (req,res,obj) => {
  const errorCode = (obj && obj.status) || 500;
  return res.status(errorCode).send({
    error: true,
    message: (obj && obj.message) || error.addUser,
    data: []
  });
}

export default { errorresponse,sendresponse};
