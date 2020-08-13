import Sequelize, { Model } from 'sequelize';

class regiao_cluster extends Model {
  static init(sequelize) {
    super.init(
      {
        id_regiao_cluster: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_motorista: Sequelize.STRING,
        cluster: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

}

export default regiao_cluster;
