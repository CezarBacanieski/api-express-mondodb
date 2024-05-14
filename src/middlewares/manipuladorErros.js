import mongoose from "mongoose";

function manipuladorErros(erro, req, res, next) {
  console.error(erro);

  if (erro instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos entao incorretos!" });
  } else {
    res.status(500).send({ message: "Erro interno no servidor" });
  }
}
export default manipuladorErros;
