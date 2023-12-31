const arrayA = [13,20,10,22,24,20,27,17,19,14,20];
const arrayB = [24,22,23,11,15,17,29,14,16,21,20];

function retornarNumerosComum(arr1, arr2) {
  const arraySaida =[];
  for (let i = 0; i < arrayA.length; i++) {            
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] === arrayB[j]) {
        arraySaida.push(arrayA[i]);
      }
    }
  }
  for (let i = 0; i < arraySaida.length; i++) {
    for (let j = i + 1; j < arraySaida.length; j++) {
      if (arraySaida[i] === arraySaida[j]) {
        arraySaida.splice(i, 1);
        j--;      // Decrementamos j para não pular nenhum elemento após a remoção. Por exemplo, se o array é [1, 2, 2, 3]
      }           // e estamos na iteração onde i = 1 e j = 2, após a remoção o array será [1, 2, 3]. Sem o j--, na
    }             // próxima iteração j seria 3 e estaríamos verificando o elemento 3 em vez do segundo 2 
  }               // que foi deslocado para o índice 2. Com o j--, na próxima iteração j será 2, permitindo-nos
  return arraySaida;  //  verificar corretamente o segundo 2.
}

console.log(retornarNumerosComum(arrayA, arrayB));
         



// MÉTODO ULTRA EFICIENTE:

function retornarNumerosComumV2(arr1, arr2) {
  const arraySaida = arr1.filter((n) => arr2.includes(n)); //Seria como: se n estiver em arr1 e tb estiver em aar2,
  return [...new Set(arraySaida)];                         // será adicionado em arraySaida.
} //new Set - Cria um conjunto (Set) a partir do arraySaida,
  // removendo duplicatas automaticamente, pois um conjunto só pode conter valores únicos.
  //... -  Usa o operador de espalhamento (...) para converter o conjunto de volta para um array,
  //  mantendo a unicidade dos valores.
console.log(`Versão 2 + EFICIENTE: ${retornarNumerosComumV2(arrayA, arrayB)}`);



/*
// Declaração dos arrays
let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14, 20];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21, 20];

// Função para encontrar números em comum entre dois arrays
function numerosEmComum(arr1, arr2) {
  let comum = [];
  let uniqueArr1 = [...new Set(arr1)]; // Remove duplicatas do primeiro array
  let uniqueArr2 = [...new Set(arr2)]; // Remove duplicatas do segundo array
  
  ****Os arrays uniqueArr1 e uniqueArr2 são criados para armazenar os elementos
  únicos de arr1 e arr2, respectivamente. Isso é feito usando o objeto Set, que
  armazena valores únicos, e o operador de espalhamento .... ****

  for (let num1 of uniqueArr1) {
    if (uniqueArr2.includes(num1)) { // Verifica se o número está presente no segundo array
      comum.push(num1); // Adiciona o número ao array de números em comum
    }
  }

  ****Nesta linha, estamos usando uma estrutura de loop for...of em JavaScript. Vamos quebrar cada parte:
  for: Esta é a palavra-chave que inicia o loop.
  let num1: Aqui, declaramos uma variável num1 que será usada para armazenar cada elemento individual de
   uniqueArr1 à medida que o loop itera através do array.
  of: Esta é outra palavra-chave que faz parte da sintaxe do loop for...of.uniqueArr1:
  Este é o array sobre o qual queremos iterar.Então, o que essa linha faz é iniciar um loop que passará
  por cada elemento em uniqueArr1, um de cada vez, e armazenará esse elemento na variável num1 para cada
  iteração do loop.****

  return comum;
}

// Teste da função
let resultado = numerosEmComum(arrayA, arrayB);
console.log("Números em comum:", resultado);
*/

/* MÉTODO MAIS EFICIENTE:
const arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14, 20];
const arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21, 20];

function retornarNumerosComum(arr1, arr2) {
  const setB = new Set(arr2);
  const arraySaida = [...new Set(arr1.filter(x => setB.has(x)))];
  return arraySaida;
}

console.log(retornarNumerosComum(arrayA, arrayB));
*/
