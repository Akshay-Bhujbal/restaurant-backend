

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product', 
  },
  quantity: {
    type: Number,
    required: true,
  },
  instructions: String,
});

const orderSchema = new mongoose.Schema({
  items: [itemSchema],
  user: {
    name: String,
    phone: String,
    address: String,
  },
  isTakeAway: Boolean,
  totals: {
    itemTotal: Number,
    tax: Number,
    deliveryCharge: Number,
    grandTotal: Number,
  },
  orderTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
