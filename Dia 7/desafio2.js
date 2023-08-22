/*2 - Caixa eletrônico DoDev (DOWHILE)

*Não esqueça de testar seu código!

Solicite o nome e o cpf do seu cliente.

Pergunte um valor.

Ofereça a opção de saque ou depósito.

Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.

Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.

Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).

Exiba o saldo total.

Exiba o maior valor inserido(independente de ser depósito ou saque).

Exiba a média dos valores inseridos(independente de ser depósito ou saque).



REGRAS: 

    1- Não deve ser permitido sacar um valor não disponível no saldo.

    2- Não deve ser permitido sacar nem depositar um valor negativo.

*/

let nome = prompt("Qual o nome do cliente: ");
let cpf = prompt("Qual o CPF do cliente: ");
let valor = 0;
let opcao ;
let saldoTotal = 0;
let continuar = "S";
let qttdOperacoes = 0;
let maiorValor = 0;
let somaValores = 0;
let mediaValores = 0;

 do {
  opcao = prompt("Olá, " + nome + "! O que deseja fazer?\nS - Saque\nD - Depósito").toUpperCase();
  valor = parseFloat(prompt("Digite o valor: "));

  if (valor <= 0) {
    console.log("Valor inválido");
  } else if (opcao === "S") {
    if (valor > saldoTotal) {
      console.log ("Saldo insuficiente!");
    } else saldoTotal -= valor;
  } else if (opcao === "D") {
    saldoTotal += valor;
  } else {
    console.log("Opção inválida");
  }

  qttdOperacoes++;
  somaValores += valor;

  if (valor > maiorValor) {
    maiorValor = valor;
  }

  continuar = prompt("Deseja continuar? (1 - Sim ou 2 - Não)");
} while (continuar == 1);



if (qttdOperacoes > 0) {
  mediaValores = somaValores / qttdOperacoes;
}

console.log("Saldo total: " + saldoTotal.toFixed(2));
console.log("Maior valor: " + maiorValor.toFixed(2));
console.log("Média dos valores: " + mediaValores.toFixed(2));