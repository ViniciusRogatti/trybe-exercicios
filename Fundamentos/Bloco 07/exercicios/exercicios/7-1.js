//[1]. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
// Código abaixo.

/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true); */

/* const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  
}
testingScope(false); */

// [2].faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Código abaixo

      const oddsAndEvens = [13, 3, 4, 10, 7, 2];
      const arraySort = (oddsAndEvens) => {
        let array = [];
        for (let number of oddsAndEvens) {
          if (number >= oddsAndEvens[0]) {
            array.push(number);
            console.log(oddsAndEvens[0])
          } else {
            console.log(array)
          }
        }
      }
      console.log(arraySort(oddsAndEvens));
      // Seu código aqui.

      /* console.log(oddsAndEvens); // será necessário alterar essa linha 😉 */