import path from 'node:path';
import { HTML_FILES_PATH } from '../config.js';

import userRouter from './api/userRouter.js';
import messageRouter from './api/messageRouter.js';
import chatRouter from './api/chatRouter.js';

const router = (app) => {
   app.get('/', (_, res) => {
      const page = path.join(HTML_FILES_PATH, 'index.html');
      res.sendFile(page);
   });
   app.get('/api', (_, res) => res.status(200).send(`<p>Server is running..</p>`));
   app.use('/api/users', userRouter);
   app.use('/api/messages', messageRouter);
   app.use('/api/chats', chatRouter);
};

export default router;
