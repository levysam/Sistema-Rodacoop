'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'regiao_clusters',
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
      'regiao_clusters',
      'id_user',
    )}
};
