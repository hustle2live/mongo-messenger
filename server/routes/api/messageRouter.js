import { Router } from 'express';
import { MessageController } from '../../controller/messageController.js';

const messageRouter = new Router();

messageRouter.post('/add', MessageController.create);
messageRouter.put('/', MessageController.update);
messageRouter.delete('/', MessageController.remove);

export default messageRouter;
