/* 2 - DoDev thru
1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".*/

let opcao = parseInt(prompt("Escolha o que deseja fazer:\n 1 - Abastecer com gasolina\n 2 - Abastecer com Álcool\n 3 - Calibrar os pneus"));

switch(opcao) {
  case 1:
    let valorG = parseInt(prompt("Qual o valor que deseja abastecer de gasolina?"));
    console.log(`Você abasteceu ${valorG / 5} litros de gasolina`);
    break;

  case 2:
    let valorA = parseInt(prompt("Qual o valor que deseja abastecer de álcool?"));
    console.log(`Você abasteceu ${valorA / 3} litros de álcool`);
    break;

  case 3:
    console.log("Pneus calibrados com sucesso.")
    break;
}