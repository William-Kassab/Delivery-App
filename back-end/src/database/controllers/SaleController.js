const sales = require('../services/SaleService');

const updateSaleStatusById = async (req, res) => {
  const { id } = req.params;
  const { saleStatus } = req.body;
  
  try {
    await sales.updateSaleStatusById(id, saleStatus);
  } catch (error) {
    console.error(error)
  }

  return res.status(204).end();
}

module.exports = {
  updateSaleStatusById,
}