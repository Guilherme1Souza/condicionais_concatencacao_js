/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!". */

alert('Calendário');
let dia = prompt('Qual é o dia da semana?');

if (dia == "Sabado") {
    console.log('Bom fim de semana');
} else if (dia == "Domingo") {
    alert('Bom fim de semana');
} else {
    alert('Boa semana');
}

/*Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.*/

let num = prompt('Qual o número?');

if (num > 0) {
    alert('Número positivo');
}

else {
    alert ('Número negativo');
}

/*Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre 
"Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar."*/

let pontos = prompt('Quanto foi a sua pontuação?');

if (pontos >= 100 ) {
    alert('Parabéns, você venceu!');
} 
else {
    alert('Tente novamente para ganhar.');
}

/*Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.*/

let saldoDaConta = 100;
alert(`Seu saldo da conta é de: ${saldoDaConta}`);

/*Peça ao usuário para inserir seu nome usando prompt. Em seguida, 
mostre um alerta de boas-vindas usando esse nome.*/

let nome1 = prompt("Digite seu nome?");
alert(`Boas vindas ${nome1}`);

