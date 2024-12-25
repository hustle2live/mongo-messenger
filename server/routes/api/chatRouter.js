import { Router } from 'express';
import { ChatController } from '../../controller/chatController.js';

const chatRouter = new Router();

chatRouter.get('/', ChatController.getAllByUserId);
chatRouter.get('/all', ChatController.getAll);
chatRouter.get('/:id', ChatController.getOne);
chatRouter.post('/', ChatController.create);
chatRouter.put('/:id', ChatController.update);
chatRouter.delete('/:id', ChatController.remove);


export default chatRouter;
