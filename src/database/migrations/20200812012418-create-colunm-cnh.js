'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pessoas',
      'cnh',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'pessoas',
      'cnh'
    )
  }
};
