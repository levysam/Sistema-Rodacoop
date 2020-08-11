'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('centro_distribuicaos', {
      id_centro_distribuicao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      identificador :{
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
      },
      uf: {
        type: Sequelize.CHAR(2),
        unique: true,
        allowNull: false
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
    return queryInterface.dropTable('centro_distribuicaos');
  }
};
