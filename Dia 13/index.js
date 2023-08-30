class Carro {
  Nome
  Potencia
  VelMax
  Aceleracao

  constructor(nome, potencia, velMax, aceleracao) {
    this.Nome = nome
    this.Potencia = potencia
    this.VelMax = velMax
    this.Aceleracao = aceleracao
  }

  calcularTempoDistancia(distancia) {
    let resultado = distancia / (this.VelMax / this.Aceleracao);
    return resultado;
  }
}

let carros = [];

let carro1 = new Carro("vw", 105, 160, 12);
let carro2 = new Carro("fiat", 160, 190, 8);
let carro3 = new Carro("toyota", 200, 210, 6);

carros[0] = carro1;
carros[1] = carro2;
carros[2] = carro3;

class Corrida {
  Nome
  Tipo
  Distancia
  Vencedor =  ""

  constructor(nome, tipo, distancia, vencedor) {
    this.Nome = nome
    this.Tipo = tipo
    this.Distancia = distancia
  }

  verificarVencedor(carros) {
    let menorTempo = 10000 //numero alto escolhido arabitrariamente pra iniciar o menor tempo.
    for (let i = 0; i < carros.length; i++) {
      let tempo = carros[i].calcularTempoDistancia(this.Distancia)
      if (tempo < menorTempo) {
        menorTempo = tempo;
        this.Vencedor = carros[i].Nome
      }
    }
  }
/*verificarVencedor(carros) {
  const tempos = carros.map(carro => carro.calcularTempoDistancia(this.Distancia));
  const menorTempo = Math.min(...tempos);
  const carroVencedor = carros[tempos.indexOf(menorTempo)];
  this.Vencedor = carroVencedor.Nome;
  }
Nesta versão:
Usamos o método map para criar um novo array tempos, que contém os tempos de corrida para todos os carros.
Usamos Math.min(...tempos) para encontrar o menor tempo entre todos os tempos de corrida.
Usamos tempos.indexOf(menorTempo) para encontrar o índice do carro com o menor tempo.
Finalmente, atualizamos this.Vencedor com o nome do carro vencedor.
Esta é uma forma mais "JavaScript-esca" de realizar a mesma tarefa.
*/

  exibirVencedor(carros) {
    this.verificarVencedor(carros);
    console.log(`O vencedor foi: ${this.Vencedor}`)
  }
}

let corrida = new Corrida("Interlagos", "StockCar", 1200)
corrida.exibirVencedor(carros)