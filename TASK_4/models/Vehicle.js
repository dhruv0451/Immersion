const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  mode: {
    type: String,
    required: true,
  },
  vehicleName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL or base64
  },
  desc: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
