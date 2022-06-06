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

module.exports = {
  createOrder,
};
