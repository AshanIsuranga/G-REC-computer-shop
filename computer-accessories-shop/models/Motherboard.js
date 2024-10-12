const mongoose = require('mongoose');

const MotherboardsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

const Motherboard = mongoose.model('Motherboard', MotherboardsSchema);

module.exports = Motherboard;