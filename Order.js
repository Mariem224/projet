const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  pizza: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);