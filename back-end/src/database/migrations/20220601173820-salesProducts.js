'use strict';
module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sale_id: {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        },
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        },
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      }
    });
  },
   down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
}
