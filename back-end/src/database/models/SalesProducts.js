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
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  })
  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sales, {foreignKey: 'saleId', as: 'sale_products'});
    SalesProducts.belongsTo(models.Products, {foreignKey: 'productId', as: 'product_sales'});
  };
  return SalesProducts;
};
module.exports = SalesProducts;
