const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const spanResultado = document.getElementById("resultado");

function somar() {
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    const resultado = numero1 + numero2;
    mostrarResultado(resultado);
}

function subtrair() {
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    const resultado = numero1 - numero2;
    mostrarResultado(resultado);
}

function multiplicar () {
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    const resultado = numero1 * numero2;
    mostrarResultado(resultado);
}

function dividir() {
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    const resultado = numero1 / numero2;
    mostrarResultado(resultado);
}

function mostrarResultado(valor) {
    spanResultado.innerText = valor;
}