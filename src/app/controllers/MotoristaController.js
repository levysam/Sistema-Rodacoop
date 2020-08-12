import * as Yup from 'yup';

import Motoristas from '../models/Motoristas'
import Pessoa from '../models/pessoa'
import isValidCpf from '../middlewares/isValidCpf'

class MotoristaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      cpf: Yup.string()
        .required(),
      nome: Yup.string().required(),
      cnh: Yup.string().required(),
      categoria: Yup.string().required(),
      id_centro_distribuicao: Yup.number(),
      id_forma_contratacao: Yup.number()
    });

    if (!(await schema.isValid(req.body)|| isValidCPF(req.body.cpf))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const pessoaExists = await Pessoa.findOne({ where: { cpf: req.body.cpf }})

    if(pessoaExists) {
      req.body.id_pessoa = pessoaExists.id_pessoa
      const {id_motorista, id_pessoa, id_centro_distribuicao} = await Motoristas.create(req.body)
      
      return res.json({
        id_motorista,
        id_pessoa,
        id_centro_distribuicao
      })
    }
    const { nome, cpf, id_pessoa } = await Pessoa.create(req.body);
    req.body.id_pessoa = id_pessoa
    const {id_motorista, id_centro_distribuicao} = await Motoristas.create(req.body)

    return res.json({
      id_motorista,
      id_pessoa,
      id_centro_distribuicao,
      nome,
      cpf
    });
  }
}

export default new MotoristaController();
