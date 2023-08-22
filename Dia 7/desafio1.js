/*1 - DoDev school (WHILE)
Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens
    *Obs.: para obter a média geral deve somar todas as notas e 
    dividir pelo número de alunos!*/

let notas = [];
let sexos = [];

cadastrarAlunos();
calcularMediaGeral();
calcularHomensEnviaramNotas();
calcularMulheresNotasAcima7();
calcularMaiorNotaHomens();


function cadastrarAlunos() {
  let continuar = true;
  while (continuar) {
    notas.push(parseInt(prompt("Digite a nota do/a aluno/a:")));
    sexos.push(prompt("Digite o sexo do/a aluno/a: M - Masculino ou F - Feminino"));
    let novoCadastro = prompt("Deseja cadastrar novo/a aluno/a? Digite S - sim ou N - não.");
    if (novoCadastro.toUpperCase() === 'N') {
      continuar = false;
    }
  }
}

function calcularMediaGeral() {
  let somaNotas = 0;
  for (let i = 0; i < notas.length; i++) {    
    somaNotas += notas[i];
  }
  let mediaNotas = somaNotas / notas.length;
  console.log(`A média geral dos alunos foi ${mediaNotas}.`);
}

function calcularHomensEnviaramNotas() {
  let HomensEnviaramNotas = 0;
  for (let i = 0; i < sexos.length; i++) {
    if (sexos[i].toUpperCase() === 'M') {
      HomensEnviaramNotas++;
    }
  }
  console.log(`${HomensEnviaramNotas} homens enviaram notas.`);
}

function calcularMulheresNotasAcima7() {
  let mulheresNotaAcima7 = 0;
  for (let i = 0; i < notas.length; i++) {
    if (sexos[i].toUpperCase() === 'F' && notas[i] >= 7) {
      mulheresNotaAcima7++;
    }
  }
  console.log(`${mulheresNotaAcima7} mulheres tiveram nota acima de 7.`);
}

function calcularMaiorNotaHomens() {
  let maiorNotaHomens = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNotaHomens) {
      maiorNotaHomens = notas[i];
    }
  }
  console.log(`A maior nota entre os homens foi ${maiorNotaHomens}.`);
}