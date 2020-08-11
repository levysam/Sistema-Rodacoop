import * as Yup from 'yup';

import centro_distribuicao from '../models/centro_distribuicao';

class CentroDistribuicaoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
  }
}

export default new CentroDistribuicaoController();
