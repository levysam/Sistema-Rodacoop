import Sequelize, { Model } from 'sequelize';

class User extends Model {

  static init(sequelize) {
    super.init(
      {
        id_motorista: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        id_pessoa: Sequelize.INTEGER,
        id_centro_distribuicao: Sequelize.INTEGER,
        id_forma_contratacao: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoa, {foreignKey: 'id_pessoa', as: 'pessoa'});
    this.belongsTo(models.centro_distribuicao, {foreignKey: 'id_centro_distribuicao', as: 'centroDistribuição'});
    this.belongsTo(models.forma_contratacao, {foreignKey: 'id_forma_contratacao', as: 'formaContratacao'})
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
