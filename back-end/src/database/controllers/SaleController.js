const sales = require('../services/SaleService');

const updateSaleStatusById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.headers;

  try {
    await sales.updateSaleStatusById(id, status);
  } catch (error) {
    console.error(error)
  }

  return res.status(204).end();
}

module.exports = {
  updateSaleStatusById,
}