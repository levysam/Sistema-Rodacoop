'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'centro_distribuicaos',
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
      'centro_distribuicaos',
      'id_user',
    )}
};
