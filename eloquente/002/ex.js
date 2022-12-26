// Math.max(2,4)  -> retorna o maior valor
// Math.min(2,4)  -> retorna o menor valor
// confirm("")    -> retorna true se clicar em OK e falso se clicar em cancel
// prompt("")     -> abre uma janela pro usuario enviar uma string 
// !isNaN()       -> verifica se é um número 
// continue/break -> quebra a execução de um loop
// .length        -> para saber o tamanho da string ficaria string.length
   
var theNumber = Number(prompt("Pick a number", ""));

if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);
else
  alert("Hey. Why didn't you give me a number?");

  /*  Switch:

    switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
  */