'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('motoristas', {
      id_motorista: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      id_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pessoas",
          key: "id_pessoa"
        }
      },
      id_centro_distribuicao : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "centro_distribuicaos",
          key: "id_centro_distribuicao"
        }
      },
      id_forma_contratacao : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "forma_contratacaos",
          key: "id_forma_contratacao"
        }
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
    return queryInterface.dropTable('motoristas');
  }
};
