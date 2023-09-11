/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////CLASS LIVRO////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
class Livro {
  titulo;
  autor;
  editora;
  anoPublicacao;
  disponibilidade;

  constructor(titulo, autor, editora, anoPublicacao, disponibilidade = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.anoPublicacao = anoPublicacao;
    this.disponibilidade = disponibilidade;
  }
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////CLASS BIBLIOTECA///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
class Biblioteca {
  nome;
  endereco;
  telefone;
  acervoLivros;

  constructor(nome, endereco, telefone, acervoLivros = []) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.acervoLivros = acervoLivros;
  }

  buscarLivro(titulo) { //Manter o método dentro da classe ajuda a encapsular a funcionalidade relacionada
    const livroEncontrado = this.acervoLivros.find(l => l.titulo === titulo); // à biblioteca dentro da classe, aderindo ao princípio de responsabilidade única.
      if (livroEncontrado) {    //acesso direto às propriedades da classe, uso do .this em acervoLivros da biblioteca atual.
      return livroEncontrado; // Retorna após encontrar e imprimir os detalhes do livro.
      }
                                             //Faz sentido a função buscarLivro dentro da classe Biblioteca, para aproveitar 
      return null;                            //os benefícios do encapsulamento e da organização orientada a objetos,         
    }                                         //pois está principalmente relacionada à operação de uma biblioteca.
  
  emprestarLivro(titulo) {
    for (const l of this.acervoLivros) {
      if (l.titulo === titulo) {
        l.disponibilidade	= false;
        return true;
      }
    }
    return false;
  }

  devolverLivro(titulo) {
    for (const l of this.acervoLivros) {
      if (l.titulo === titulo) {
        l.disponibilidade = true;
        return true;
      }
    }
    return false;
  }
}     

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////CLASS SISTEMA BIBLIOTECAS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
class SistemaBibliotecas {
  constructor() {
    this.bibliotecas = [];
  }

  adicionarBiblioteca(biblioteca) {
    this.bibliotecas.push(biblioteca);
  }

  buscarLivro(titulo) {
    let livrosEncontrados = [];
  
    this.bibliotecas.forEach(b => {
      const livro = b.buscarLivro(titulo);
      if (livro) {
        livrosEncontrados.push({ ...livro, biblioteca: b.nome });
      }
    });
  
    if (livrosEncontrados.length > 0) {
      livrosEncontrados.forEach(livro => {
        console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de publicação: ${livro.anoPublicacao}\nDisponibilidade: ${livro.disponibilidade}\nBiblioteca: ${livro.biblioteca}`);
      });
      return livrosEncontrados;
    } else {
      console.log("Livro não encontrado em nenhuma biblioteca.");
      return null;
    }
  }
  
  emprestarLivro(titulo, nomeBiblioteca) {
    const biblioteca = this.bibliotecas.find(b => b.nome === nomeBiblioteca);
  
    if (biblioteca) {
      if (biblioteca.emprestarLivro(titulo)) {
        console.log(`Livro ${titulo} emprestado da biblioteca ${biblioteca.nome}`);
      } else {
        console.log(`Livro ${titulo} não disponível na biblioteca ${biblioteca.nome}`);
      }
    } else {
      console.log(`Biblioteca ${nomeBiblioteca} não encontrada.`);
    }
  }

  devolverLivro(titulo, nomeBiblioteca) {
    const biblioteca = this.bibliotecas.find(b => b.nome === nomeBiblioteca);
  
    if (biblioteca) {
      if (biblioteca.devolverLivro(titulo)) {
        console.log(`Livro ${titulo} devolvido à biblioteca ${biblioteca.nome}`);
      } else {
        console.log(`Livro ${titulo} não encontrado na biblioteca ${biblioteca.nome}`);
      }
    } else {
      console.log(`Biblioteca ${nomeBiblioteca} não encontrada.`);
    }
  }
}


let livros = [
  new Livro("Pizza","Marcelo", "Pinguim", 2000, true),
  new Livro("Verdades", "Jose", "Globo", 2017, false),
  new Livro("Amor", "Claudia", "Record", 1997, true),
  new Livro("Cachorros", "Viviane", "Band", 2023, true)
];

let bibliotecas = [
  new Biblioteca("Nacional", "São Paulo", "9999-9999", [livros[0], livros[1], livros[3]]),
  new Biblioteca("Estadual", "Minas Gerais", "888-8888", [livros[2], livros[3]])
];



let sistemaBibliotecas = new SistemaBibliotecas();
/*Objetivo: Criar uma instância da classe SistemaBibliotecas para gerenciar todas as bibliotecas disponíveis.
 Ação: Usando a palavra-chave new, criamos uma nova instância da classe SistemaBibliotecas.
 Resultado: Agora temos um objeto sistemaBibliotecas que pode acessar todos os métodos e propriedades definidos
 na classe SistemaBibliotecas.*/

bibliotecas.forEach(b => sistemaBibliotecas.adicionarBiblioteca(b));


/*Objetivo: Adicionar todas as bibliotecas individuais criadas anteriormente ao sistema de bibliotecas.
Ação: bibliotecas.forEach(...): Usamos o método forEach para iterar sobre cada elemento no array bibliotecas.
 O forEach é uma maneira eficiente de executar uma ação para cada item em um array sem a necessidade
 de escrever um loop manual.
biblioteca => sistemaBibliotecas.adicionarBiblioteca(biblioteca): Dentro do forEach, definimos uma
 função de callback que pega cada biblioteca individual como um argumento e chama o método
 adicionarBiblioteca no sistemaBibliotecas, passando a biblioteca atual como argumento.
 Isso efetivamente adiciona cada biblioteca ao sistema de bibliotecas.
Resultado: Todas as bibliotecas no array bibliotecas são agora membros do sistema de bibliotecas,
 e podemos começar a usar os métodos do sistema de bibliotecas para interagir com todas
 as bibliotecas de uma vez.*/

sistemaBibliotecas.buscarLivro("Cachorros");
sistemaBibliotecas.emprestarLivro("Amor", "Estadual");
sistemaBibliotecas.devolverLivro("Amor","Estadual");
