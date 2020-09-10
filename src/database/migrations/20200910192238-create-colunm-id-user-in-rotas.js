'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'rotas',
      'id_user',
      {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id_user"
        },
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'rotas',
      'id_user',
    )}
};
