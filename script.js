//número ramdômico
var numeroMentalizado = parseInt(Math.random() * 101) 
// CONTADOR DE CHUTES
var chutes = 0;
//limite de chutes 
var limiteDeChutes = 12;
//chutes restantes
var chutesRestantes = limiteDeChutes;

var avisoDechutes

alert("O Jogo vai começar. Você tem um limite de " + limiteDeChutes + " chutes!");

while  (chute != numeroMentalizado) {
  
  //se atingir o limite de chutes
  if(chutes >= limiteDeChutes) {
    alert ("Você atingiu o limite de chutes. O jogo acabou. ");
   break}
  
  var chute = prompt("Chute um número de 0 a 100")
  // incrementando a variavel  chutes
  chutes++;

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
  //aviso de 6 chutes
  if (chutes === 6) {
    alert("Atençao você já fez um total de 6 chutes !");
  }
}
//alert de total de chutes
  alert("Você fez um total de " + chutes + " chute(s)!")


