'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'situacao_motorista',
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
      'situacao_motorista',
      'id_user',
    )}
};
