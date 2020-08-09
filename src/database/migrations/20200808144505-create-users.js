module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      id_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "pessoas",
          key: "id_pessoa"
        }
      },
      acesso: {
        type: Sequelize.CHAR,
        allowNull: true,
        unique: false,
      },
      situacao: {
        type: Sequelize.CHAR,
        allowNull: true,
        unique: false,
        defaultValue: 'P',
        comment: 'A - Ativo / I - Inativo / P - Pendente / B - Bloqueado'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('users');
  }
};
