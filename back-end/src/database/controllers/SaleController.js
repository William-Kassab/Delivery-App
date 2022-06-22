const sales = require('../services/SaleService');

const updateSaleStatusById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.header;

  await sales.updateSaleStatusById(id, status);

  return res.status(204).end();
}

module.exports = {
  updateSaleStatusById,
}