import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbClient } from './dbClient.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.ATLAS_URI;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const db = dbClient(DATABASE_URL);

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
   db.connect();
});
