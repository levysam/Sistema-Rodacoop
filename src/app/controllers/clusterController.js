import * as Yup from 'yup';
import regiao_cluster from '../models/regiao_cluster';

class cluster {
  async store(req, res) {
    const schema = Yup.object().shape({
      cluster: Yup.string()
        .required(),
      uf: Yup.string()
      .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const regiao_clusterExists = await regiao_cluster.findOne({ where: { cluster: req.body.cluster }});
    if (regiao_clusterExists) {
      regiao_clusterExists = await regiao_clusterExists.findOne({where: {uf: req.body.uf}})
      if (regiao_clusterExists) {
        return res.status(400).json({ error: 'tipo de contratação already exists' })
      }
    }
    req.body.id_user = req.userId
    const {cluster, uf, id_user } = await regiao_cluster.create(req.body);
    return res.json({
      cluster,
      uf,
      id_user
    });
  }
}

export default new cluster();
