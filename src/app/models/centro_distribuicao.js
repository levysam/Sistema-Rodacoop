import Sequelize, { Model } from 'sequelize';

class centro_distribuicao extends Model {

  static init(sequelize) {
    super.init(
      {
        id_centro_distribuicao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        identificador: Sequelize.STRING(50),
        uf: Sequelize.CHAR(2)
      },
      {
        sequelize,
      }
    );

    return this;
  }

}

export default centro_distribuicao;
