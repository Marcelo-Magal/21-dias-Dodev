


let nomes = [];
let senhas = [];
let continuar = true;

main();

function main() {
  while (continuar) {
    let opcao = parseInt(prompt("Digite 1 - cadastrar, 2 - login, 3 - excluir ou 4 - encerrar."));

    switch (opcao) {
      case 1: //cadastrar
        let nome = prompt("Digite o nome a cadastrar:");
        let senha = prompt("Digite a senha a cadastrar:");
  
        if (nome === "" || senha === "") {
          console.log("Nome ou senha não podem estar vazios.");
        } else if (nomes.includes(nome)) {
          console.log("Nome de usuário já existe. Por favor escolha um diferente.");
        } else {
          nomes.push(nome);
          senhas.push(senha);
          console.log("Cadastro efetuado com sucesso.");
        }
          break;

      /*nomes.push(prompt("Digite o nome a cadastrar:"));
        senhas.push(prompt("Digite a senha a cadastrar:"));
        console.log("Cadastro efetuado com sucesso.");
        break;
      */
  
      case 2: //login
        let nomeLogin = prompt("Digite o nome para fazer login:");
        let senhaLogin = prompt("Digite a senha para login:");
        let indexLogin = nomes.indexOf(nomeLogin);
  
        if (nomeLogin === nomes[indexLogin] && senhaLogin === senhas[indexLogin]) {
          console.log("Login feito com sucesso.");
        } else {
          console.log("Nome e/ou senha incorreto(s).");
        }
        break;
  
      case 3:
        let nomeExcluir = prompt("Digite o nome de usuário a ser excluído do cadastro:");
        let indexExcluir = nomes.indexOf(nomeExcluir);
        if (indexExcluir !== -1) {
          nomes.splice(indexExcluir, 1);
          senhas.splice(indexExcluir, 1);
          console.log("Usuário excluído com sucesso");
        } else {
          console.log("Usuário não encontrado");
        }
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
  }




