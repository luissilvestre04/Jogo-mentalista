//número ramdômico
var numeroMentalizado = parseInt(Math.random() * 101)

// FAZENDO UM CONTADOR DE CHUTES
var chutes = 0;
 //

while  (chute != numeroMentalizado) {
  // incrementando a variavel  chutes
 chutes++;

  var chute = prompt("Chute um número de 0 a 100")
  //se o chute for igual ao numero mentalizado
  if (chute == numeroMentalizado) {
    alert("Parabéns, você acertou em " + chutes + " chutes!");
   break; // Sai do loop quando o jogador acerta 
 }
  //se o chute for menor que o numero 
  else if (chute > numeroMentalizado) {
    alert( chute + " ? Não. Errou... o número é menor tente novamente");
  }
  //se o chute for maior
  else if (chute < numeroMentalizado) {
    alert(chute + " ? Não. Errou... o número é maior tente novamente")
  }
  
}
//alert de total de chutes
  alert("Você fez um total de " + chutes + " chute(s)!")


