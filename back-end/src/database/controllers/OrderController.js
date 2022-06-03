const Sales = require('../services/OrderService');


const createOrder = async (req, res) => {
  const body = req.body;
  const createdOrder = await Sales.createOrder(body);

  return res.status(201).json(createdOrder.id);
};

module.exports = {
  createOrder,
};
