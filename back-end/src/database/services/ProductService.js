const { Products } = require('../models');

const getAllProducts = async () => {
  const foundProducts = await Products.findAll();

  return foundProducts;
};

module.exports = {
  getAllProducts,
};
