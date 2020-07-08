const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.listen(3333);
