import Sequelize, { Model } from 'sequelize';

class forma_contratacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id_forma_contratacao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        tipo_contratacao: Sequelize.STRING,
        id_user: {
          type: Sequelize.INTEGER
        }
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default forma_contratacao;
