//Desafio
// 2 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do Desafio!';

// 3 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarClique(){
    console.log('O botão foi clicado!');
}

// 4 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarAlerta(){
    console.log('Eu amo JS');
}

// 5 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt(){
    let cidade = prompt('Digite um nome de uma cidade do Brasil');
    alert('Estive em ' +cidade +' e lembrei de você.');
}

// 6 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma(){
    let num1 = parseInt(prompt('Digite o primeiro numero inteiro para a soma'));
    let num2 = parseInt(prompt('Digite o segundo numero inteiro'));
    let soma = parseInt(num1 + num2);
    alert(soma);
}
