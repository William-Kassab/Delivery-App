const { Products } = require('../models');

const getAllProducts = async (_req, _res) => {
  const foundProducts = await Products.findAll();

  return foundProducts;
};

module.exports = {
  getAllProducts,
};
