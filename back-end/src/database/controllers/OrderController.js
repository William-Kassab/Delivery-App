const Sales = require('../services/OrderService');

const createOrder = async (req, res) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    cart,
  } = req.body;
  const createdOrder = await Sales.createOrder(
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    cart,
  );

  return res.status(201).json(createdOrder.id);
};

const getAllOrders = async (_req, res) => {
  const gotAllOrders = await Sales.getAllOrders();

  return res.status(200).json(gotAllOrders);
};

module.exports = {
  createOrder,
  getAllOrders,
};
