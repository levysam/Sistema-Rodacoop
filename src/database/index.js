import Sequelize from 'sequelize';

import User from '../app/models/User'
import Pessoa from '../app/models/pessoa'
import centro_distribuicao from '../app/models/centro_distribuicao'
import forma_contratacao from '../app/models/forma_contratacao'
import Motoristas from '../app/models/Motoristas'

import databaseConfig from '../config/database';

const models = [User, Pessoa, centro_distribuicao, forma_contratacao, Motoristas];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
