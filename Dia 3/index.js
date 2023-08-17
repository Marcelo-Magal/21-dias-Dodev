/* 1 - Crie um sistema que peça para o seu usuário as seguintes informações:
nome, idade, altura e peso. 
2 - Salve essas informações em variáveis e a partir delas obtenha o ano de 
nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.
   *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 
    IMC = peso / (altura x altura)
3 - Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): 
"Olá giovanni, você tem 23 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2" */

let userName = [];
let userAge = [];
let userHeight = [];
let userWeight = [];

registerUser();

caulculateIMC(prompt("De quem vc gostaria de calcular o IMC?"));





function registerUser() {
  userName.push(prompt("What's the user name?"));
  userAge.push(parseInt(prompt("What's the user age?")));
  userHeight.push(parseFloat(prompt("What's the user heigth?")));
  userWeight.push(parseInt(prompt("What's the user weight?")));
}

function caulculateIMC(name) {
  let i = userName.indexOf(name);
  let IMC = userWeight[i] / Math.pow(userHeight[i], 2);
  let yearBorn = 2023 - userAge[i];
  console.log(`Olá ${userName[i]} , você tem ${userAge[i]} anos, nasceu em ${yearBorn}, tem ${userHeight[i]} de altura, pesa ${userWeight[i]}kg seu IMC é ${IMC.toFixed(2)} Kg/m2`);
  return IMC; 
}