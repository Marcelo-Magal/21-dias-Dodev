/*DESAFIO DIA #6:
1 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.
2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
   Ex.: 0 5 10 15 20 25 … 45 50 Fim!
3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
   Ex.: 50 45 40 35 30 25 … 5 0 Fim!*/

algo1();
   
function algo1() {
  let numero = parseInt(prompt("Qual o número inteiro e positivo para a contagem?"));
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

algo2();

function algo2() {
  let contagem = 50;
  for (let i = 0; i <= contagem; i += 5) {
    console.log(i);
  }
}

algo3();

function algo3() {
  let contagem = 0;
  for (let i = 50; i >= contagem; i -= 5) {
    console.log(i);
  }
}

/*4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.*/

algo4();

function algo4() {
  let numero = parseInt(prompt("Qual o número para as tabuadas?"));
  for (i = numero; i < numero + 3; i++) {
    console.log(`Número ${i}:`)
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
}