import { Router } from 'express';
import mongoose from 'mongoose';

const messageRouter = new Router();

messageRouter.get('/', async (req, res) => {
   try {
      const response = await fetch('QUOTE_URL');
      if (!response.ok) {
         throw Error('Message Error while fetching forismatic.com');
      }
      const result = await response.json();
      const { quoteText, quoteAuthor } = result;
      res.status(200).send({ quoteText, quoteAuthor });
   } catch (error) {
      res.statusCode = 500;
      // res.json({ message: error?.message ?? error  });
      res.json({ message: 'Message Error while fetching forismatic.com' });
   }
});
messageRouter.post('/', (req, res) => {});
messageRouter.put('/', (req, res) => {});
messageRouter.delete('/', (req, res) => {});

export default messageRouter;


