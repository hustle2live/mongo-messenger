import { Router } from 'express';
import { UserController } from '../../controller/userController.js';

const userRouter = new Router();

userRouter.get('/all', UserController.fetch);
userRouter.get('/:id', UserController.findOne);
userRouter.post('/', UserController.create);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', UserController.remove);

export default userRouter;
