import * as Yup from 'yup';

import forma_contratacao from '../models/forma_contratacao';

class FormaContratacaoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      tipo_contratacao: Yup.string()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const tipo_contratacaoExists = await forma_contratacao.findOne({ where: { tipo_contratacao: req.body.tipo_contratacao }});

    if (tipo_contratacaoExists) {
      return res.status(400).json({ error: 'tipo de contratação already exists' })
    }

    const {id_forma_contratacao, tipo_contratacao } = await forma_contratacao.create(req.body);
    return res.json({
      id_forma_contratacao,
      tipo_contratacao
    });
  }
}

export default new FormaContratacaoController();
