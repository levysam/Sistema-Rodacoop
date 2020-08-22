import * as Yup from 'yup';
import User from '../models/User';
import Pessoa from '../models/pessoa';
import isValidCPF from '../middlewares/isValidCpf';
import quickstart from '../middlewares/convert_placa_to_string'

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      cpf: Yup.string().required().min(10),
    });

    if (!(await schema.isValid(req.body) || isValidCPF(req.body.cpf))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    quickstart()

    const userExists = await User.findOne({ where: { email: req.body.email } });

    const cpfExists = await Pessoa.findOne({where: { cpf: req.body.cpf }})

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    if (cpfExists) {
      req.body.id_pessoa = cpfExists.id_pessoa
      const {nome, cpf} = cpfExists
      const { id_user, email, id_pessoa} = await User.create(req.body);
      return res.status(200).json({ 
        id_user,
        id_pessoa,
        nome,
        cpf,
        email, })
    }
    const { nome, cpf, id_pessoa } = await Pessoa.create(req.body);
    req.body.id_pessoa = id_pessoa
    const { id_user, email} = await User.create(req.body);
    

    return res.json({
      id_user,
      id_pessoa,
      nome,
      cpf,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    if (password && !oldPassword) {
      return res.status(401).json({ error: 'Old password not provided' });
    }

    const { id, name} = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
