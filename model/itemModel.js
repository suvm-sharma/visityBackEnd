const mongoose = require('mongoose');
const validator = require('validator');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    minlength: [5, 'Name must have more or equal then 5 characters'],
    // validate: [validator.isAlpha, 'Name must only contain characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  mobile: {
    type: Number,
    required: [true, 'Please enter a valid mobile Number'],
    min: [1000000000, 'Mobile Number must have equal to 10 digits'],
  },
});

const Items = mongoose.model('Items', itemSchema);
module.exports = Items;
