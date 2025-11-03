//Funcions matemàtiques

//Sumar
export function sumar(a, b) {
    return a + b;
}

//Restar
export function restar(a, b) {
    return a - b;
}

//Multiplicar
export function multiplicar(a, b) {
    return a * b;
}

//Dividir
export function dividir(a, b) {
    return a / b;
}

//Resto
export function getResto(a, b) {
    return a % b;
}

//Es senar (sols numeros positius)
export function esPrimer(a) {
    if (a < 2) return false; // 0 i 1 no són 
    for (let i = 2; i < a; i++){
        if (a % i == 0){
            return false;
        }
    }
    return true;
}