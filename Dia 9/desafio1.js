// Programa principal
let continuar = "SIM";

do {
  const { idade, peso, altura } = informarDadosUsuario(); //explicação no final!

  verificarMaioridadeUsuario(idade);
  mostrarIdadesMesesSemanasDias(idade);
  calcularUsuarioIMC(peso, altura);
  descobrirAnoNascimento(idade);
  
  continuar = escolherContinuarEncerrarPrograma();
} while (continuar === "SIM")


//Declaração de Funções:
function informarDadosUsuario() {
  const nome = prompt("Qual o nome do usuário?");
  const idade = parseInt(prompt("Qual a idade do usuário?"));
  const peso = parseInt(prompt("Qual o peso do usuário?"));
  const altura = parseFloat(prompt("Qual a altura do usuário? (Em metros)"));
  const profissao = prompt("Qual a profissão do usuário?");
  
  console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`);
  
  return { nome, idade, peso, altura, profissao };
}

function verificarMaioridadeUsuario(idade) {
  let mensagem;
if (idade < 18) {
    mensagem = "Sem gelada para você";
} else {
    mensagem = "Está liberado para tomar umas geladas";
}
  console.log(mensagem);
}

function mostrarIdadesMesesSemanasDias(idade) {
  const idadeDias = idade * 365;
  const idadeSemanas = idadeDias / 7;
  const idadeMeses = idadeDias / 30;
  
  console.log(`Sua idade em dias é ${parseInt(idadeDias)}, em semanas é ${parseInt(idadeSemanas)}, em meses é ${parseInt(idadeMeses)}.`);
}

function calcularUsuarioIMC(peso, altura) {
  const imc = peso / (altura * altura);
  const imcRounded = imc.toFixed(1);
  let categoria;

  if (imcRounded < 18.5) {
    categoria = "Magreza";
  } else if (imcRounded < 24.9) {
    categoria = "Normal";
  } else if (imcRounded < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }

  console.log(`Seu IMC(${imcRounded}) é de ${categoria}`);
}

function descobrirAnoNascimento(idade) {
  const anoNascimento = 2023 - idade;
  for (let i = 0; i <= idade; i++) {
    console.log(`${anoNascimento + i} - ${i} anos de idade`);
  }
}

function escolherContinuarEncerrarPrograma() {
  return prompt("Deseja cadastrar outro usuário ou encerrar o programa? (SIM ou NÃO)").toUpperCase();
}




/* 
let idade;
let peso;
let altura;
let continuar = "SIM";

do {
  informarDadosUsuario();
  verificarMaioridadeUsuario(idade);
  mostrarIdadesMesesSemanasDias(idade);
  calcularUsuarioIMC(peso, altura);
  descobrirAnoNascimento(idade);
  continuar = escolherContinuarEncerrarPrograma(continuar);
} while (continuar === "SIM");





function informarDadosUsuario() {
  let nome = prompt("Qual o nome do usuário?");
  idade = parseInt(prompt("Qual a idade do usuário?"));
  peso = parseInt(prompt("Qual o peso do usuário?"));
  altura = parseFloat(prompt("Qual a altura do usuário? (Em metros)"));
  let profissao = prompt("Qual a profissão do usuário?");
  console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`);
}

function verificarMaioridadeUsuario(idade) {
  if (idade < 18) {
    console.log("Sem gelada para você");
  } else {
    console.log("Está liberado para tomar umas geladas");
  }
}

function mostrarIdadesMesesSemanasDias(idade) {
  let idadeMeses = (idade * 365) / 30;
  let idadeSemanas = (idade * 365) / 7;
  let idadeDias = (idade * 365);
  console.log(`Sua idade em dias é ${parseInt(idadeDias)}, em semanas é ${parseInt(idadeSemanas)}, em meses é ${parseInt(idadeMeses)}.`);
}

function calcularUsuarioIMC(peso, altura) {
  let imc = peso / (altura * altura);
  let imcRounded = imc.toFixed(1);

  if (imcRounded < 18.5) {
    console.log(`Seu IMC(${imcRounded}) é de Magreza`);
  } else if (imcRounded > 18.5 && imcRounded < 24.9) {
    console.log(`Seu IMC(${imcRounded}) é Normal`);
  } else if (imcRounded > 24.9 && imcRounded < 30) {
    console.log(`Seu IMC(${imcRounded}) é de Sobrepeso`);
  } else {
    console.log(`Seu IMC(${imcRounded}) é de Obesidade`);
  }
}

function descobrirAnoNascimento(idade) {
  let anoNascimento = 2023 - idade;
  for (i = 0; i <= idade; i++) {
    console.log(`${anoNascimento} - ${i} anos de idade`);
  }
}

function escolherContinuarEncerrarPrograma(continuar) {
  continuar = prompt("Deseja cadastrar outro usuário ou encerrar o programa? (SIM ou NÃO)").toUpperCase();
  return continuar;
}
*/




/* EXPLICAÇÃO DA PARTE COM OBJETOS:

1. A Função informarDadosUsuario:
Quando a função informarDadosUsuario é chamada, ela coleta informações do usuário através de prompts e, no final,
 retorna um objeto contendo essas informações:

javascript
Copy code
return { nome, idade, peso, altura, profissao };
Este objeto tem a seguinte estrutura (como exemplo):

javascript
Copy code
{
  nome: "João",
  idade: 25,
  peso: 70,
  altura: 1.75,
  profissao: "Engenheiro"
}
2. Desestruturação de Objetos em JavaScript:
A desestruturação é uma funcionalidade do JavaScript que permite extrair valores de objetos ou arrays e
 atribuí-los a variáveis. No caso de objetos, a desestruturação permite extrair propriedades específicas
  de um objeto e atribuí-las a variáveis com o mesmo nome das propriedades.

A sintaxe básica da desestruturação de objetos é:

javascript
Copy code
const { propriedade1, propriedade2, ... } = objeto;
3. Aplicação no Loop while:
No loop while do código, a função informarDadosUsuario é chamada e seu retorno (um objeto) é desestruturado:

javascript
Copy code
const { idade, peso, altura } = informarDadosUsuario();
O que está acontecendo aqui é:

A função informarDadosUsuario é chamada e retorna um objeto.
A desestruturação extrai as propriedades idade, peso e altura desse objeto.
Três constantes (idade, peso e altura) são criadas e inicializadas com os valores extraídos do objeto.
Por exemplo, se o usuário inserir 25 para idade, 70 para peso e 1.75 para altura, após a execução dessa linha,
 as constantes terão os seguintes valores:

idade = 25
peso = 70
altura = 1.75
Essas constantes podem então ser usadas em outras partes do loop e passadas como argumentos para outras funções,
 como verificarMaioridadeUsuario(idade), sem a necessidade de acessar diretamente o objeto retornado.

Espero que isso tenha esclarecido o conceito para você! A desestruturação é uma ferramenta poderosa
 em JavaScript que pode tornar o código mais limpo e legível.
*/