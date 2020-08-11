import Sequelize, { Model } from 'sequelize';

class forma_contratacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id_forma_contratacao: {
          type: Sequelize.INTEGER,
          PrimaryKey: true,
          autoIncrement: true
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
