'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'forma_contratacaos',
      'tipo_contratacao',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'forma_contratacaos',
      'tipo_contratacao'
    )
  }
};
