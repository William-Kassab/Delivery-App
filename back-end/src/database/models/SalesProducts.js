'use strict';
const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("SalesProducts", {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sale_id',
      foreignKey: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id',
      foreignKey: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'salesProducts',
    timestamps: false,
  })
  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sales, {foreignKey: 'sale_id', as: 'sale_products'});
    SalesProducts.belongsTo(models.Products, {foreignKey: 'product_id', as: 'product_sales'});
  };
  return SalesProducts;
};
module.exports = SalesProducts;
