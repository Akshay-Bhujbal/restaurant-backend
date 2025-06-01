// controllers/orderController.js

const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const { items, user, isTakeAway, totals, orderTime } = req.body;

    if (!items || items.length === 0 || !user || !user.name || !user.address) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const newOrder = new Order({
      items,
      user,
      isTakeAway,
      totals,
      orderTime,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully.', order: savedOrder });
  } catch (error) {
    console.error('Error in createOrder:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
