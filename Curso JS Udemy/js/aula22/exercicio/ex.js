let numero1 = prompt('Digite um número para fazer a conta');
let conta = prompt('Agora digite qual conta quer fazer (+, -, /, *)')
let numero2 = prompt('Digite o segundo número da conta');
let resultado;

numero1 = Number(numero1); 
numero2 = Number(numero2);

if (conta == '+')
 resultado = numero1 + numero2;
else if (conta == '-')
 resultado = numero1 - numero2; 
else if (conta == '/')
 resultado = numero1 / numero2;
else
 resultado = numero1 * numero2;

alert('O Resultado Foi: ' + resultado);