const pessoa1 = { // criação de objeto
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){} // metodo
}; 

console.log(pessoa1.nome, pessoa1.sobrenome)

function CriaPessoa(nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
/* ou
function CriaPessoa(nome,sobrenome,idade){
    return{
        nome,
        sobrenome,    // ou return{ nome, sobrenome, idade};
        idade
    };
}
 */
const pessoa = CriaPessoa('Julio', 'Cesar', 15);