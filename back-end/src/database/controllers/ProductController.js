const Product = require('../services/ProductService')

const getAllProducts = async (_req, res) => {
  const foundProducts = await Product.getAllProducts();

  return res.status(200).json(foundProducts);
};

module.exports = {
  getAllProducts,
};
