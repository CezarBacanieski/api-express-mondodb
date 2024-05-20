import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "titulo do livro é obrigatorio!"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatorio"],
    autopopulate: { select: "nome" },
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatoria!"],
    enum: {
      values: ["Billionaire"],
      message: "O nome deve da {VALUE} deve ser Billionaire",
    },
  },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message:
        "O numero de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}",
    },
  },
});

livroSchema.plugin(autopopulate);
const livros = mongoose.model("livros", livroSchema);

export default livros;
