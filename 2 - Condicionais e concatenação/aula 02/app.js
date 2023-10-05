alert ('Bem vindo ao jogo do número secreto');
let NumeroSecreto = 5;
console.log (NumeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

if (NumeroSecreto == chute) {
   alert(`Parabéns, você acertou! O número secreto é: ${NumeroSecreto}`);
}
else { alert('Você errou');
}