const Sales = require('../services/OrderService');

const createOrder = async (req, res) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    productId,
    quantity,
  } = req.body;
  const createdOrder = await Sales.createOrder(
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    productId,
    quantity,
  );

  return res.status(201).json(createdOrder.id);
};

module.exports = {
  createOrder,
};
