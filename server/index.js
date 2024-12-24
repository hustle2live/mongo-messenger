import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbClient } from './dbClient.js';
import { appRoutes } from './routes/routes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.ATLAS_URI;

const db = dbClient(DATABASE_URL);

app.use('/api', appRoutes);

app.listen(PORT, () => {
   db.connect();
   console.log(`Server is running on http://localhost:${PORT}`);
});
