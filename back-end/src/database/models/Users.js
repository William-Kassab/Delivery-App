const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    tableName: "users",
    timestamps: false,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Sales, { foreignKey: "userId", as: "user_sales" });
    Users.hasMany(models.Sales, { foreignKey: "sellerId", as: "user_seller" });
  };
  return Users;
};
module.exports = Users;
