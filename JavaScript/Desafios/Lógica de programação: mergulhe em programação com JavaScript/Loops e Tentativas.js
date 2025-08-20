// Corrigindo erro de loop infinito

let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = 0

while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador++;
}

let media = soma / qtdNumeros;

console.log(media);
//------------------------------------------------------------------------------

//Desafios
//1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0;

while(contador <= 10){
    alert(contador);
    contador++;
}

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 10;

while(contador >= 0){
    alert(contador);
    contador--;
}

//3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
alert('Vamos realizar uma contagem regressiva.');
let quantidade = prompt('Digite o numero de inicio!')

while(quantidade >= 0){
    alert(quantidade);
    quantidade--;
}
