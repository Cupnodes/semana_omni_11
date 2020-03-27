const express = require('express');
const indexRoutes = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', indexRoutes);


app.listen(3333);