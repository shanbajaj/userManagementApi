const authentication = (req,res,next) => {
  const header = req.headers.authorization;
  const encodedLoginDetails = header.split("Basic ");
  const bufferObj = Buffer.from( encodedLoginDetails[1], "base64");
  const decodedLoginDetails = bufferObj.toString("utf8");
  const loginDetails = decodedLoginDetails.split(':');
  if(loginDetails[0] == process.env.PSW && loginDetails[1] == process.env.PSW) {
    next();
  }else{
    res.status(401).send("INVALID USERNAME OR PASSWORD");
  }
}
export default authentication;

