const { Sales } = require('../models');

const updateSaleStatusById = async (id, status) => {
  switch (status) {
    case 'Pendente':
      await Sales.update({ status: "Preparando" }, { where: { id }})
      break;
    case 'Preparando':
      await Sales.update({ status: "Em Trânsito" }, { where: { id }})
      break;
    case 'Em Trânsito':
      await Sales.update({status: "Entregue"}, { where: { id }})
      break;
    default:
      break;
    }
}

module.exports = {
  updateSaleStatusById,
}