import { Router } from 'express';
import { userRouter, messageRouter } from './api/index.js';

function AppRouter(app) {
   return {
      init: () => {
         app.get('/api', (req, res) => {
            console.log('API running');
            res.status(201).send('Hello API');
         });
         app.use('/api/users', userRouter);
         app.get('/api/messages', messageRouter);
      }
   };
}

export default AppRouter;
