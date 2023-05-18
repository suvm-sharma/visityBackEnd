const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config('.env');
const itemController = require('./controller/itemController');
const itemRouter = require('./routes/itemRouter');

const app = express();

// 
const path = require('path');
const template_path = path.join(__dirname, './template/view');

app.set('view engine', 'hbs');
app.set('views', template_path);
app.get('/', itemController.getIndex);
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase is connected Successfully!!');
  })
  .catch(() => {
    console.error('Error getting from DataBase');
  });

const port = process.env.PORT || 1997;

app.use(express.json()); // in built middleware
app.use('/items', itemRouter);

app.listen(port, () => {
  console.log(`Port is running on ${port}...`);
});
