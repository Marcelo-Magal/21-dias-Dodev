/* 1 - Calculadora DoDev
1.1 - Crie um algoritmo que peça 2 números ao usuário
1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
1.3 - Exiba no console a operação feita e o resultado da conta
*Não esqueça de testar seu código! */


let operacao = parseInt(prompt("Qual é a operação que deseja realizar? \n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão"));
let num1 = Number(prompt("Qual é o primeiro número da operação?"));
let num2 = Number(prompt("Qual é o segundo número da operação?"));
  
  switch(operacao) {
    case 1: //Soma
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;

    case 2: //Subtração
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;

    case 3: //Multiplicação
      console.log(`${num1} x ${num2} = ${num1 * num2}`);
      break;

    case 4: //Divisão
      console.log(`${num1} ÷ ${num2} = ${num1 / num2}`);
      break;
}




