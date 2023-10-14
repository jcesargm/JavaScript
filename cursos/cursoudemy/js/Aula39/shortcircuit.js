/*
false -> 0, '', "", ``, null/undefined, NaN. -> qualquer coisa diferente disso é true em js
se checar e não tiver nenhum falso vai retornar o ultimo valor:
console.log('Luiz' && 'Maria'); // como não tem nenhum falso vai retornar Maria que é o ultimo valor
-> e se for falso vai retornar o valor falso

agora com ||, precisa so de um verdadeiro pra retornar true -> true || false -> retorna o primeiro valor verdadeiro
*/