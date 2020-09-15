import * as Yup from 'yup';

import centro_distribuicao from '../models/centro_distribuicao';

class CentroDistribuicaoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      identificador: Yup.string()
        .required(),
      uf: Yup.string()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const CentroDistribuicaoExists = await centro_distribuicao.findOne({ where: { identificador: req.body.identificador }});

    if (CentroDistribuicaoExists) {
      return res.status(400).json({ error: 'Centro de Distribuicao already exists' })
    }
    req.body.id_user = req.userId
    const {id_centro_distribuicao, identificador, uf, id_user } = await centro_distribuicao.create(req.body);
    return res.json({
      id_centro_distribuicao,
      identificador,
      uf,
      id_user
    });
  }
}

export default new CentroDistribuicaoController();
