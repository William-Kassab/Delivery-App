const { Sales } = require('../models');
const { SalesProducts } = require('../models');

const createOrder = async (
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  productId,
  quantity,
  ) => {
  const createOrder = await Sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: Date(),
    status: 'Pendente',
  });
  const orderId = createOrder.id;

  await SalesProducts.create({
    saleId: Number(orderId),
    productId,
    quantity,
  });

  return createOrder;
};

module.exports = {
  createOrder,
};
