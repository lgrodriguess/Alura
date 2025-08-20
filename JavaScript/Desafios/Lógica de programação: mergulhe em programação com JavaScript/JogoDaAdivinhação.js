alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

// Fica repetindo enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10!');
    // Forma simplificade de : tentativas = tentativas + 1
    tentativas++;
    // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert('Boaaa! Você advinhou o número secreto ' +numeroSecreto);
        alert('Você precisou de ' +tentativas +' tentativas.');
            // Se ele nao for igual :
            } else {
                if (numeroSecreto > chute){
                    alert('O número secreto é maior que ' +chute + '. Ja foram feita/as ' +tentativas +' tentativas.');
                }else{
                    alert('O número secreto é menor que ' +chute + '. Ja foram feita/as ' +tentativas +' tentativas.');
            }
        }
}
