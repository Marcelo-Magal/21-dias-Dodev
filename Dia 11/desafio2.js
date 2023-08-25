// Variáveis globais:
const modelos = [];
const anos = [];
const valores = [];
let contador = 0;
let continuar = "S";


// Programa principal:
while (continuar === "S") {
  cadastrarCarros();
  continuar = continuarCadastro();
}

exibirDadosCarros();
ordenarPorMenorValor();


// Declaração de Funções:
function cadastrarCarros() {
  let modelo = prompt(`Qual é o modelo do ${contador + 1}º carro?`);
  let ano = parseInt(prompt(`Qual é o ano do ${contador + 1}º carro?`));
  // Validação o ano:
  while (isNaN(ano) || ano < 0 || ano > 2024) {
    alert("Por favor, insira um ano válido.");
    ano = parseInt(prompt(`Qual é o ano do ${contador + 1}º carro?`));
  }
  let valor = parseInt(prompt(`Qual é o valor do ${contador + 1}º carro?`));
  // Validação do valor:  
  while (isNaN(valor) || valor < 0) {
    alert("Por favor, insira uma valor válido.");
    valor = parseInt(prompt(`Qual é o valor do ${contador + 1}º carro?`));
  }
  modelos.push(modelo);
  anos.push(ano);
  valores.push(valor);
  contador++;
}

function continuarCadastro() {
  return prompt("Deseja cadastrar outro carro? (S - SIM ou N - NÃO)").toUpperCase();
}

function exibirDadosCarros() {
  modelos.forEach((modelo, index ) => {
    console.log(`${modelo}, ${anos[index]}, valor: ${valores[index]}`);
  });
}

function ordenarPorMenorValor() {
  for (let i = 0; i < valores.length - 1; i++) {
    indiceMin = i;
    for (let j = i + 1; j < valores.length; j++) {
      if (valores[j] < valores[indiceMin]) {
        indiceMin = j;
      }
    }
    if (indiceMin !== i) {

      // Troca os valores
      let tempValor = valores[i];
      valores[i] = valores[indiceMin];
      valores[indiceMin] = tempValor;

      // Troca os modelos
      let tempModelo = modelos[i];
      modelos[i] = modelos[indiceMin];
      modelos[indiceMin] = tempModelo;

      // Troca os anos
      let tempAno = anos[i];
      anos[i] = anos[indiceMin];
      anos[indiceMin] = tempAno;

    }
  }
  modelos.forEach((modelo, index ) => {
    console.log(`${modelo}, ${anos[index]}, valor: ${valores[index]}`);
  });
}