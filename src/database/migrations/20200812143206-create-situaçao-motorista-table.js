'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('situacao_motorista', {
      id_situacao_motorista: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
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
      justificativa: {
        type: Sequelize.STRING(32000),
        unique: true,
        allowNull: false
      },
      inicio_periodo: {
        type: Sequelize.DATE,
      },
      fim_periodo: {
        type: Sequelize.DATE
      },
      motivo: {
        type: Sequelize.CHAR(1)
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
    return queryInterface.dropTable('situacao_motorista');
  }
};
