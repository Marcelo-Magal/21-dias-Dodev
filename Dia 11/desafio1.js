//Versão abaixo MELHORADA!

// Variáveis globais
const nomes = [];
const notas = [];
let continuar = "S";
let contador = 0;

// Programa principal
while (continuar === "S") {
  cadastrarAlunos();
  continuar = continuarCadastro();
}

exibirNotasSomaMedia();

// Declaração de Funções
function cadastrarAlunos() {
  let nome = prompt(`Qual é o nome do ${contador + 1}º aluno?`);
  let nota = parseInt(prompt(`Qual é a nota do ${contador + 1}º aluno?`));

  // Validação da nota
  while (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Por favor, insira uma nota válida entre 0 e 10.");
    nota = parseInt(prompt(`Qual é a nota do ${contador + 1}º aluno?`));
  }

  nomes.push(nome);
  notas.push(nota);
  contador++;
}

function continuarCadastro() {
  return prompt("Deseja cadastrar outro aluno? (S - SIM ou N - NÃO)").toUpperCase();
}

function exibirNotasSomaMedia() {
  let soma = 0;

  nomes.forEach((nome, index) => {
    console.log(`A nota de ${nome} é ${notas[index]}`);
    soma += notas[index];
  });

  console.log(`A soma das notas é ${soma}`);
  console.log(`A média das notas é ${(soma / notas.length).toFixed(2)}`);
}

/*
// Programa principal
let continuar = "S";
let contador = 0;


while (continuar === "S") {
  cadastrarAlunos();
  continuar = continuarCadastro();
}

exibirNotasSomaMedia();

//Declaração de Funções:
function cadastrarAlunos() {
  let nomes = [];
  let notas = [];
  nomes.push(prompt(`Qual é o nome do ${contador + 1}º aluno?`));
  notas.push(parseInt(prompt(`Qual é a nota do ${contador + 1}º aluno?`)));
  contador++;
}

function continuarCadastro() {
  return prompt("Deseja cadastrar outro aluno ou encerrar o programa? (S - SIM ouN - NÃO)").toUpperCase();
}

function exibirNotasSomaMedia() {
  for (let i = 0; i < nomes.length; i++) {
    console.log(`A nota de ${nomes[i]} é ${notas[i]}`);
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }
  console.log(`A soma das notas é ${soma}`);

  let media = 0;
  media = soma / parseFloat(notas.length);
  console.log(`A média das notas é ${media.toFixed(2)}`);
}
*/