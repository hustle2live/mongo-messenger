const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const dbClient = require('./dbClient.js');

// const appRoutes = require('./routes/routes.js');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.ATLAS_URI;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// app.get('/', async (req, res) => {});

app.listen(PORT, async () => {
   dbClient(DATABASE_URL).connect();
   console.log(`Server is running on http://localhost:${PORT}`);
});
