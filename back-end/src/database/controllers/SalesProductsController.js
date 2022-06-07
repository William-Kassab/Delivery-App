const salesProducts = require('../services/SalesProductsService');

const getSalesProductsById = async (req, res) => {
  const { id } = req.params;

  const foundSalesProductsById = await salesProducts.getSalesProductsById(id);

  return res.status(200).json(foundSalesProductsById);
};

module.exports = {
  getSalesProductsById,
};
