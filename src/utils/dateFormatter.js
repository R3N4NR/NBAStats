export function calcularIdade(date) {
  // Transforma a data de nascimento em um objeto Date
  let dataNascimento = new Date(date);
  // Pega a data atual
  let dataAtual = new Date();

  // Calcula a diferença entre as datas em milissegundos
  let diferenca = dataAtual - dataNascimento;

  // Converte a diferença de milissegundos para anos
  let idade = Math.floor(
    diferenca / (1000 * 60 * 60 * 24 * 365.25),
  );

  return idade;
}
