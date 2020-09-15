import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        identidade: Sequelize.STRING,
        orgaoExp: Sequelize.STRING,
        dataNasc: Sequelize.DATE,
        id_user_creator: {
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

export default Pessoa;

