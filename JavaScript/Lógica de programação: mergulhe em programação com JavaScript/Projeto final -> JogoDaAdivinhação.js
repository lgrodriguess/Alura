alert('Boas vindas ao jogo do número secreto');
let maximo = parseInt(prompt('Escolha o valor máximo que o número secreto pode ter!'));
let numeroSecreto = parseInt(Math.random() * maximo + 1); //"Math.random()"" pega um numero aleatorio entre 0 e 1! Como estamos interessados nos numeros inteiros,"
                                                      //multiplicamos por 100! Para excluir os dados apos a virgula, utilizamos a funcao "parseInt" , Somamos com 1 para.
                                                      //não ter a chance de ser 0 e para haver a chance do numero ser 100.
console.log(numeroSecreto);
let chute;
let tentativas = 0;

// Fica repetindo enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e ' +maximo);
    // Forma simplificade de : tentativas = tentativas + 1
    tentativas++;
    // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
            break;
            // Se ele nao for igual :
            } else {
                if (numeroSecreto > chute){
                    alert('O número secreto é maior que ' +chute );
                }else{
                    alert('O número secreto é menor que ' +chute );
            }
        }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Boaaa! Você advinhou o número secreto ' +numeroSecreto  +' com ' +tentativas +' ' +palavraTentativa);
//O codigo em cima é uma variação simplificada do codigo abaixo!
//if (tentativas > 1){
//       alert('Boaaa! Você advinhou o número secreto ' +numeroSecreto  +' com ' +tentativas +' tentativa!!');
//}else{
//        alert('Boaaa! Você advinhou o número secreto ' +numeroSecreto  +' com ' +tentativas +' tentativas!!');
//}
