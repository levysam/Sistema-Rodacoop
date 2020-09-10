'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('rotas', {
      id_rotas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      id_regiao_cluster:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "regiao_clusters",
          key: "id_regiao_cluster"
      },
      id_motorista :{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "motoristas",
          key: "id_motorista"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rotas');
  }
};
