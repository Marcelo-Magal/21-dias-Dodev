// Variáveis globais:
const nomes = [];
const senhas = [];
let continuar = true;

// Programa principal:
while (continuar) {
  let opcao = escolherFuncao();

  switch (opcao) {
    case 1:
      cadastrar()
      break;

    case 2:
      let efetuado = login(nomes, senhas);
      if (efetuado === true) {
        console.log("Login efetuado com sucesso.");
      } else {
        console.log("Nome e/ou senha incorretos.");
      }
      break;

    case 3:
      excluir(nomes);
      break;

    case 4:
      console.log("Programa encerrado");
      continuar = false; 
      break;
      
    default:
      console.log("Opção inválida");
      break;
    }
}

// Declaração de Funções:
function escolherFuncao() {
  const opcao = parseInt(prompt("Escolha o que deseja executar: 1 - Cadastrar, 2 - Login, 3 - Excluir, 4 - Encerrar."));
  return opcao;
}

function cadastrar() {
  let nome = prompt("Digite o nome a cadastrar:");
  let senha = prompt("Digite a senhas a cadastrar:");

  if ( nome === "" || senha === "") {
    console.log("Nome e/ou senha não podem estar vazios");
  } else if (nomes.includes(nome)) {
    console.log("Nome de usuário existente, escolha outro nome de usuário.")
  } else {
    nomes.push(nome);
    senhas.push(senha);
    console.log("Usuário e senha cadastrados com sucesso");
  }
}

function login(nomes, senhas) {
  let nomeLogin = prompt("Digite o nome de login:");
  let senhaLogin = prompt("Digite a senha de login:");
  let indexLogin = nomes.indexOf(nomeLogin);

  if (nomeLogin === nomes[indexLogin] || senhaLogin === senhas[indexLogin]) {
    return true;
  } else {
    return false;
  }
}

function excluir(nomes) {
  let nomeExcluir = prompt("Digite o nome do cadastro a ser excluido:");
  let indexExcluir = nomes.indexOf(nomeExcluir);

  if (nomeExcluir === nomes[indexExcluir]) {
    nomes.splice(indexExcluir, 1);
    nomes.splice(indexExcluir, 1);
    console.log("Usuário excluído com sucesso");
  } else {
    console.log("Usuário não encontrado");
  }
}