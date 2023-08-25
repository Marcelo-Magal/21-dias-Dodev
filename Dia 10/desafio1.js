// Programa principal
criarAlgoritmos1();
criarAlgoritmos2();
criarAlgoritmos3();
criarAlgoritmos4();

//Declaração de Funções:

function criarAlgoritmos1() {
  let numerosInteirosPositivos = [];
  for (i = 0; i < 10; i++) {
    numerosInteirosPositivos.push(parseInt(prompt(`Digite o ${i + 1}º número inteiro e positivo:`)));
  }
  for (i = 0; i < 10; i++){
    console.log(`índice ${i} - ${numerosInteirosPositivos[i]}`)
  }
}

function criarAlgoritmos2() {
  let cincoNumeros = [];
  for (let i = 0; i < 5; i++) {
    cincoNumeros.push(parseInt(prompt(`Digite o ${i + 1}º número do Array:`)));
  }
  console.log(cincoNumeros);
  let arrayInvertida = [];
  for (i = cincoNumeros.length - 1; i >= 0; i--) {
    arrayInvertida.push(cincoNumeros[i]);
  }
  console.log(`entrada: ${cincoNumeros} -> saída: ${arrayInvertida}`);
}

function criarAlgoritmos3() {
  const x = parseInt(prompt("Qual o tamnho do Array?"));
  let xNumeros = [];
  for (let i = 0; i < x; i++) {
    xNumeros.push(parseInt(prompt(`Digite o ${i + 1}º número do Array:`)));
  }
  console.log(xNumeros);
  let arrayInvertidaX = [];
  for (i = xNumeros.length - 1; i >= 0; i--) {
    arrayInvertidaX.push(xNumeros[i]);
  }
  console.log(`entrada: ${xNumeros} -> saída: ${arrayInvertidaX}`);
}

function criarAlgoritmos4() {
  let sequenciaFibonacci = [];
  const numero = parseInt(prompt("Escolha um número inteiro e positivo:"));
  sequenciaFibonacci.push(numero - 1);
  sequenciaFibonacci.push(numero);
  for (i = 2; i < 10; i++) {
    sequenciaFibonacci.push(sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2]);
  }
  console.log(`Sequência de Fibonacci: ${sequenciaFibonacci}`);
}
