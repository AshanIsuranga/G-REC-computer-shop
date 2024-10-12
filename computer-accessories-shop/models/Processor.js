const mongoose = require('mongoose');

const ProcessorsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  cpu_cores: Number,
  threads: Number,
  base_clock: String,
  warranty: String

});

const Processor = mongoose.model('Processor', ProcessorsSchema);



module.exports = Processor;