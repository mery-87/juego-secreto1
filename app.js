let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto ) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return; 
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', "ya se sortearon todos los numeros posinbles");
    }else {
        // Si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
        } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
         }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar numero aleatorio
    // inicializar numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  
}

condicionesIniciales();
