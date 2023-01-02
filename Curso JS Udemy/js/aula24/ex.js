//let string = "Um \"texto\""; // usamos a barra invertida para escapar o caractere, ou seja \" as aspas escaparam

let string = "um texto";

//console.log(string[3]);
// console.log(string.charAt(3)); // faz exatamente o que os colchetes fazem
// console.log(string.concat(' ', string, ' ', 'grande')); // concatena

 // console.log(string.indexOf('texto')); // fala em q indice começou a palavra, que no caso é indice 3 (t)
 // console.log(string.indexOf('Um', 3)); // tenta achar "Um" depois do indice 3, como não tem vai resultar em -1
 // console.log(string.lastIndexOf('texto')); // acha o indice da ultima letra

 //console.log(string.match(/[a-z]/g)); // (expressões regulares) acha todas as letras de a-z dentro da string
 //console.log(string.search(/x/)); // acha o indice de onde esta o x
 //console.log(string.replace('Um', 'Outra')); // substitui a palavra Um pela Outra
 //console.log(string.replace(/r/g, '#')); //muda todos os 'r' do texto para #, iria mudar só o primeiro se eu n botasse o \g

 // console.log(string.length); // ve o tamanho da string

 // console.log(string.slice(2, 6)); // vai mostrar somente o texto que estiver entre esses indices (rato)
 // console.log(string.slice(-5)); // vai mostrar todas as letras depois de (o tamanho da string - 5), vai mostrar roma. 
 // console.log(string.slice(-5, string.length - 1)); // agora vai mostrar roma sem o '.', pois eu tirei ele 

 // string.toUpperCase(); // transforma em maiusculo
 // string.toLowerCase(); // transforma em minusculo
