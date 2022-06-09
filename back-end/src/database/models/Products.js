'use strict';
const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
    },
    url_image: {
      type: DataTypes.STRING({ length: 200 }),
      allowNull: false,
    }
  },
  {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  })
  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, {foreignKey: 'productId', as: 'product_sales'});
  };
  return Products;
};
module.exports = Products;
