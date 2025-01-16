const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create Order
router.post('/order', async (req, res) => {
  const { address, phone, pizza } = req.body;
  try {
    const order = new Order({ address, phone, pizza });
    await order.save();
    res.status(201).json({ msg: 'Order created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;