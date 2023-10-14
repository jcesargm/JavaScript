// capturar o evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Julio ama mais que a gyovanna', false);
        return;
    } 

    if(!altura){
        setResultado('Julio ama mais', false);
        return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu amor é ${imc} (${nivelImc}).`;
        setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Julio ama gyovanna, Gyovanna odeia julio', 'Gyovanna trata o julio como um mendigo mas ele ama ela', 'eu te amo', 'eu te amo mt vo me matar',
    'te amo mais sim calaboca', 'nao adianta descutir filhona'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP(){
    const p = document.createElement('p'); /* criou um paragrafo no js */
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    } 
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}