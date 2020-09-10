'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('escalas', {
      id_escala: {
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
      id_regiao_cluster:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "regiao_clusters",
          key: "id_regiao_cluster"
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      },
      situacao: {
        type: Sequelize.STRING(1)
      },
      justificativa_desistencia: {
        type: Sequelize.TEXT
      },
      data: {
        type: Sequelize.DATE
      },
      id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id_user"
      },
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
    return queryInterface.dropTable('escalas');
  }
};
