import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbClient from './dbClient.js';
import appRouter from './routes/routes.js';
import  { socketHandler, socketResponder } from './socket/socket.js';

import { PORT, DATABASE_URL, STATIC_PATH, CLIENT_URL } from './config.js';

const app = express();

app.use(express.static(STATIC_PATH));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const server = createServer(app);
const io = new Server(server, {
   cors: {
      origin: CLIENT_URL
   }
});

const db = dbClient(DATABASE_URL);

appRouter(app);

socketHandler(io);

export const socketEmitter = socketResponder(io);

server.listen(PORT, () => {
   db.connect();
   console.log(`Server is running on http://localhost:${PORT}`);
});
