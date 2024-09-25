const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({error: erro.message});
    }
  }

  async pegaTodasPessoas(req, res) {
    try {
      const listaPessoas = await pessoaServices.pegaPessoasEscopo();
      return res.status(200).json(listaPessoas);
    } catch (erro) {
      return res.status(500).json({error: erro.message});
    }
  }
}

module.exports = PessoaController;