/*Tipos de dados primitivos: string, number, undefined, boolean, symbol */
let nomeAluno; // undefined    -> não aponta pra local nenhum na memória
const sobreAluno = null; // Nulo -> não aponta pra local nenhum na memória

const boolean = true;
const boolean2 = false;

console.log(typeof sobreAluno);

let a = [1,2];
let b = a;

console.log(a, b);

b.push(3);
console.log(a,b);