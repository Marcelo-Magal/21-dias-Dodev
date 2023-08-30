perguntarNomeSalario();

function perguntarNomeSalario() {  
  nome = prompt("Qual é o nome do funcionário?");
  salario = parseFloat(prompt("Qual é o salário do funcionário?"));

  calcularAumento(nome, salario);

  calcularNovamente();
}

function calcularAumento() {
  let percentagemAumento = 0;
  if (salario <= 1500) {
    percentagemAumento = 20;
  } else if (salario > 1501 && salario <= 2000) {
    percentagemAumento = 15;
  } else if (salario > 2001 && salario <= 3000) {
    percentagemAumento = 10;
  } else {
    percentagemAumento = 5;
  }
  let novoSalario = salario * (1 + (percentagemAumento / 100));

  console.log(`${nome}, salário antigo: ${salario}, ${percentagemAumento}% de aumento, salário reajustado: ${novoSalario.toFixed(2)}.`);
}

function calcularNovamente() {
  let resposta = prompt("Deseja calcular novamente?");
  if (resposta.toUpperCase() === "S") {
    perguntarNomeSalario();
  } else {
    console.log("Programa encerrado.");
  }
}
