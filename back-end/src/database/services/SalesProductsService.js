const { SalesProducts } = require('../models');
const { Sales } = require('../models');
const { Products } = require('../models');

const getSalesProductsById = async (id) => {
  const getSalesProductsById = await SalesProducts.findAll({
    where: { saleId: id },
    include: [
      { model: Sales, as: 'sale_products' },
      { model: Products, as: 'product_sales' },
    ],
  });

  return getSalesProductsById;
};

module.exports = {
  getSalesProductsById,
};
