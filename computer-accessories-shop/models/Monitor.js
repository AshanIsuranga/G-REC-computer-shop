const mongoose = require('mongoose');

const MonitorsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

const Monitor = mongoose.model('Monitor', MonitorsSchema);

module.exports = Monitor;