import * as Yup from 'yup';

import centro_distribuicao from '../models/forma_contratacao';

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

    const {id_centro_distribuicao, identificador, uf } = await centro_distribuicao.create(req.body);
    return res.json({
      id_centro_distribuicao,
      identificador,
      uf
    });
  }
}

export default new CentroDistribuicaoController();
