/*
Luiz Otávio Miranda tem 30 ano, pesa 84 kg
tem 2.8 de altura e seu IMC é de 25.925925925
Luiz Otávio nasceu em 1980
*/

const nome = 'Júlio César';
const sobrenome = 'Gomes Martins'
const idade = 15;
const peso = 55;
const alturaEmMetro = 1.78;

let imc = peso / (alturaEmMetro * alturaEmMetro); 
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg\ntem', alturaEmMetro, 'de altura e seu IMC é de', imc);
console.log(`${nome} nasceu em ${anoNascimento}`);