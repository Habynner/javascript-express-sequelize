const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaPessoasEscopo () {
    const listaPessoas = await super.pegaRegistrosEscopo('todosOsRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices;