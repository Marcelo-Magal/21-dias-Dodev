
receberAlgoritmos1();
receberAlgoritmos2();
receberAlgoritmos3();
receberAlgoritmos4();



/*1 - Crie um algoritmo que receba um número inteiro positivo e um array.
Popule o array e no final exiba os índices em que número inserido aparece
nesse array. Para testes do exercício use até 10 elementos no array.*/
function receberAlgoritmos1() {
  let numerosInteirosPositivos = [];
  for (i = 0; i < 10; i++) {
    numerosInteirosPositivos.push(parseInt(prompt(`Digite o ${i + 1}º número inteiro e positivo:`)));
  }
  for (i = 0; i < 10; i++){
    console.log(`índice ${i} - ${numerosInteirosPositivos[i]}`)
  }
}

/* 2 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array,
 depois exiba esse array. Modifique os elementos do array de modo que a sequência
 de números fique ao contrário.
   Ex.: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2 , 1 
*/
function receberAlgoritmos2() {
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

/* 3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja
inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final,
exiba o array e o array ao contrário */
function receberAlgoritmos3() {
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

/*
4 - Crie um algoritmo que peça um número inteiro positivo para o usuário. 
Em seguida, popule um array com os números de Fibonacci
(o próximo número da sequência é a soma dos 2 números anteriores).
Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido - 1).
   Ex.: inseriu o número 8, a sequência deve começar da
        seguinte maneira 7 8 15 23 ...
*/
function receberAlgoritmos4() {
  let sequenciaFibonacci = [];
  const numero = parseInt(prompt("Escolha um número inteiro e positivo:"));
  sequenciaFibonacci.push(numero - 1);
  sequenciaFibonacci.push(numero);
  for (i = 2; i < 10; i++) {
    sequenciaFibonacci.push(sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2]);
  }
  console.log(sequenciaFibonacci);
}
