// Programa principal
let corrigir = "S";
do {  
  const salario = informarDadosCliente();
  corrigir = InformarSeInformacoesEstaoCorretas();
  informarPrevisaoSalarios(salario);
} while (corrigir === "S")


//Declaração de Funções:
function informarDadosCliente() {
  const nome = prompt("Qual o nome do usuário?");
  const idade = parseInt(prompt("Qual a idade do usuário?"));
  const salario = parseFloat(prompt("Qual o salário do usuário?"));
  console.log(`Olá ${nome}, você tem ${idade} anos, e o seu salário é R$${salario}.`);
  return salario;
}

function InformarSeInformacoesEstaoCorretas() {
  return prompt("As informações estão correts? (S - sim ou N - não)")
}

function informarPrevisaoSalarios(salario) {
  let ano = 2023;
  const salario1Ano = salario * 1.015;
  console.log(`${ano} - R$${salario1Ano.toFixed(2)}`);
  ano++;
  for (let i = 1; i < 10; i++) {
    let novoSalario = salario1Ano * 1.03;
    console.log(`${ano} - R$${novoSalario.toFixed(2)}`);
    ano++
  }
}