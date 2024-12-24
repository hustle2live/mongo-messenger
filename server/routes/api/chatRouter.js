import { Router } from 'express';
import { ChatController } from '../../controller/chatController.js';

const chatRouter = new Router();

chatRouter.post('/', ChatController.create);
chatRouter.put('/:id', ChatController.update);
chatRouter.delete('/:id', ChatController.remove);
chatRouter.get('/', ChatController.getAll);
chatRouter.get('/:id', ChatController.getOne);

export default chatRouter;
