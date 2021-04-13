import { Router } from 'express';
const args = { mergeParams: true }
const userRouter = Router(args)
import userController from '../controllers/users.js';
import authentication from '../middleware/authentication.js';
userRouter.route('/')
  .get(authentication,userController.getUser)
  .post(authentication,userController.addUser)

userRouter.route('/:id')
  .get(authentication,userController.getUserById)
  .put(authentication,userController.updateUser)
  .delete(authentication,userController.deleteUser)

export default userRouter;
