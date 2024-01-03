/* A -> B
   B -> C
   C -> A 
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';
/*
var lock = varA;
varA = varB;
varB = varC;
varC = lock;
*/

[varA, varB, varC] = [varA, varB, varC];

console.log(varA, varB, varC);