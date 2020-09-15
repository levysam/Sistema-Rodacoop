import Sequelize, { Model } from 'sequelize';

class situacao_motorista extends Model {
  static init(sequelize) {
    super.init(
      {
        id_situacao_motorista: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_motorista: Sequelize.STRING,
        justificativa: Sequelize.STRING,
        inicio_periodo: Sequelize.DATE,
        fim_periodo: Sequelize.DATE,
        motivo: Sequelize.STRING(),
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

export default situacao_motorista;
