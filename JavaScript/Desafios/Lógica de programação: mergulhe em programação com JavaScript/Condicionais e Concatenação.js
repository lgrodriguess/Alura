
//1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

alert('Qual é o dia da semana?');
let diaDaSemana = prompt('Informe o dia da semana!(Utilize o padrao [Segunda,Quinta,Sábado...]');

if (diaDaSemana == 'Sábado'){
    alert('Bom Fim de Semana!');
}else if (diaDaSemana == 'Domingo'){
    alert('Bom Fim de Semana!');
}else{
    alert('Tem uma grande semana pela frente hein?!');
}
//---------------------------------------------------------------------------------------------------

//2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

alert('Vamos ver se seu numero é positivo ou negativo?');
let numero = prompt('Digite seu numero!');

if (numero > 0){
    alert('Seu Número é positivo!');
}else if (numero < 0){
    alert('Seu Número é negativo!');
}else{
    alert('Seu Número é neutro!');
}
//---------------------------------------------------------------------------------------------------

//3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

alert('Verificador de pontuação');
let pontuação = prompt('Insira sua pontuação');

if(pontuação >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar, faltam pra você ' +(100 - pontuação) +' pontos!');
}
//---------------------------------------------------------------------------------------------------

//4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 2350; //exemplo de saldo disponivel
alert('O saldo disponivel na sua conta é de R$'+saldo);
//---------------------------------------------------------------------------------------------------

//5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

alert('Insira seu nome!');
let nome = prompt('Digite-o');
alert('Seja Bem-Vindo/a '+nome);



