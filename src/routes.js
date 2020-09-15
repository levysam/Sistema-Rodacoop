import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CentroDistribuicaoController from './app/controllers/CentroDistribuicaoController'
import MotoristaController from './app/controllers/MotoristaController'
import FormaContratacaoController from './app/controllers/FormaContratacaoController'
import SituacaoController from './app/controllers/SituacaoController'
import cluster from './app/controllers/clusterController'

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.post('/centro_distribuicao', CentroDistribuicaoController.store);
routes.post('/forma_contratacao', FormaContratacaoController.store);
routes.post('/Motoristas', MotoristaController.store);
routes.post('/situacao_motorista', SituacaoController.store)
routes.post('/cluster', cluster.store)
routes.put('/users', UserController.update);

export default routes;
