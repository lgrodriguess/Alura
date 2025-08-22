//Desafio

// 1 - Criar uma função que exibe "Olá, mundo!" no console.
function exibirConsole(){
  console.log('Olá, mundo!');
}
ecibirConsole();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = prompt('Digite seu nome');
function exibirNome(nome){
  console.log('Olá, ' +nome +'!');
}

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let numero = parseInt(prompt('Digite um numero pra calcular o dobro'));
function retornarDobro(numero){
  return numero * 2;
}
let resultadoDobro = retornarDobro(numero);
console.log(resultadoDobro);

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function retornarMédia(a,b,c){
  return (a + b + c) / 3;
}
let resultadoMedia = retornarMédia(2,4,6);
console.log(resultadoMedia)

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornarMaior(a,b){
  return a > b ? a : b; //if (a > b) { return a;} else {  return b;}
}
let resultadoMaior = retornarMaior(5,9);
console.log(resultadoMaior);

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function retornarMultEleMesmo(a){
  return a * a;
}
let resultadoMultEleMesmo = retornarMultEleMesmo(6);
console.log(resultadoMultEleMesmo);
