import { Router } from 'express';
import mongoose from 'mongoose';

const appRoutes = new Router();

appRoutes.get('/get-qoute', async (req, res) => {
   try {
      const response = await fetch('QUOTE_URL');
      if (!response.ok) {
         throw Error('Error while fetching forismatic.com');
      }

      const result = await response.json();

      const { quoteText, quoteAuthor } = result;

      res.status(200).send({ quoteText, quoteAuthor });
   } catch (error) {
      res.statusCode = 500;
      res.json({ message: error?.message ?? error });
   }
});

appRoutes.post('/', (req, res) => {});

appRoutes.put('/', (req, res) => {});

appRoutes.delete('/', (req, res) => {});

export { appRoutes };
