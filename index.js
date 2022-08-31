require('dotenv').config();
const taskRoute = require('./routes');
const dbConnect = require('./database');

const express = require('express');

const app = express();
app.use(express.json());
app.use('/tasks', taskRoute);
dbConnect();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server running on', port);
})