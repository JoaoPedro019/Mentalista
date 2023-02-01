var numeroSecreto = parseInt(Math.random()*100)+1;
var tentativa = 10;

const chute = document.querySelector('#chute');

function Game() {

    while(chute != numeroSecreto) {
        var chute = prompt("Olá, seja bem vindo ao jogo. Você tem 10 tentativas. Digite seu número de 0 a 100:")
        if (chute == numeroSecreto) {
          alert("Parabéns, você acertou!")
      }
        if (tentativa != numeroSecreto) {
          tentativa = tentativa - 1;
      }
        if (tentativa <= 0) {
        alert("Você infelizmente perdeu, a resposta era " + númeroOculto + ", boa sorte na próxima")
        break 
      }
        else if (chute > numeroSecreto) {
          alert("Errou :( o número é menor que " + chute + ", tente novamente")
      }
        else if (chute < numeroSecreto) {
          alert("Errou :( o número é maior que " + chute + ", tente novamente")
      }
      }
}