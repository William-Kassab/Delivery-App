const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING(),
      allowNull: false,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING(),
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      defaultValue: 'pendente',
      type: DataTypes.STRING(),
    }
  },
  {
    tableName: 'sales',
    timestamps: false,
  });
  Sales.associate = (models) => {
    Sales.hasMany(models.SalesProducts, {foreignKey: 'sale_id', as: 'sale_products'});
    Sales.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user_sales'});
    Sales.belongsTo(models.Users, {foreignKey: 'seller_id', as: 'user_seller'});
  };
  return Sales;
};
module.exports = Sales;
