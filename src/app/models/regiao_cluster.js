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
        cluster: Sequelize.STRING,
        uf: Sequelize.STRING(2),
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

export default regiao_cluster;
