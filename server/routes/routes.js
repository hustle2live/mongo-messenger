import userRouter from './api/userRouter.js';
import messageRouter from './api/messageRouter.js';

function AppRouter(app) {
   return {
      init: () => {
         app.get('/api', (req, res) => {
            console.log('API running');
            res.status(201).send('Hello API');
         });
         app.use('/api/users', userRouter);
         app.use('/api/messages', messageRouter);
      }
   };
}

export default AppRouter;
