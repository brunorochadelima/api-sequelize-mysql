const database = require("../models");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll(); //Find all é p mesmo que select * from pessoas
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
