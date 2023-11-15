 //quando o chute for diferente
 while (chute!=numeroMentalizado) {
      
 
  var numeroMentalizado = 43

  var chute = prompt('Chute um número de 1 a 100')

//se o chute for igual ao numero mentalizado 
  if (chute == numeroMentalizado) {
  alert('Parabens você acertou!')  
  //se o chute for menor que o numero
  } else if (chute > numeroMentalizado){
    alert('Errou... o número é menor tente novamente')
  }
  //se o chute for maior
  else if (chute < numeroMentalizado) {
    alert('Errou o número é maior tente novamente')  
  }
}