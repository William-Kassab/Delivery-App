const { Sales } = require('../models');
const { SalesProducts } = require('../models');

const createOrder = async (
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  cart,
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

  await Promise.all(cart.map(async (product) => {
    const createdSalesProducts = await SalesProducts.create({
      saleId: Number(orderId),
      productId: product.id,
      quantity: product.quantity,
    });
    return createdSalesProducts;
  }));

  return createOrder;
};

const getAllOrders = async () => {
  const getAllOrders = await Sales.findAll();

  return getAllOrders;
};

module.exports = {
  createOrder,
  getAllOrders,
};
