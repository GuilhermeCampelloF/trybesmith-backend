import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();
userRouter.get('/', userController.list);

export default userRouter;