const mongoose = require('mongoose');

const GpusSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  boost_clock: String,
  memory_size: String,
  memory_type: String,
  cuda_cores: Number

});

const Gpu = mongoose.model('Gpu', GpusSchema);



module.exports = Gpu;