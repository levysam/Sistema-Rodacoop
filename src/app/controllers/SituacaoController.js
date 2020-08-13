import * as Yup from 'yup';

import situacao_motorista from '../models/situacao_motorista';

class SituacaoController {
  async store(req, res) {
    const schema = Yup.object().shape({
        id_motorista: Yup.number()
        .required(),
        justificativa: Yup.string(32000)
        .required(),
        inicio_periodo: Yup.date().required(),
        fim_periodo: Yup.date().required(),
        motivo: Yup.string(1)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const Situacao_motorista = await situacao_motorista.findOne({ where: { id_motorista: req.body.id_motorista }});

    if (Situacao_motorista) {
      const {id_motorista, justificativa, inicio_periodo, fim_periodo, motivo} = Situacao_motorista.update(req.body)
      return res.json({
        id_motorista,
        justificativa,
        inicio_periodo,
        fim_periodo,
        motivo
      })
    }

    const {id_motorista, justificativa, inicio_periodo, fim_periodo} = situacao_motorista.create(req.body)
    return res.json({
      id_motorista,
        justificativa,
        inicio_periodo,
        fim_periodo,
        motivo
    });
  }
}

export default new SituacaoController();
