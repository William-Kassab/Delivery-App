const { Sales } = require('../models');

const createOrder = async (body) => {
  const createOrder = await Sales.create(body);

  return createOrder;
};

module.exports = {
  createOrder,
};
