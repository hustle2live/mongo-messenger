const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const appRoutes = require('./routes/routes.js');

const app = express();

const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// app.use('/', appRoutes);

const chatScheme = new mongoose.Schema({
   chatId: String,
});

app.post('/createChat', async (req, res) => {
   const name = req.body.name;
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
