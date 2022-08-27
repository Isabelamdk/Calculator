console.log("alo")

const variavel1 = "um texto";
const variavel2 = 22;
const variavel3 = true;
const variavel4 = [variavel1, variavel2, variavel3];
const variavel5 = {
    variavel10: 50,
    variavel2,
    variavel3,
    variavel4,
    valorqualquer: "qualquer coisa",
    minhaFuncao: function (parametro1, parametro2) {
        console.log("O valor do parametro 1 é:", parametro1);
        console.log("O valor do parametro 2 é:", parametro2);
    }
};
console.log("console:", console)
console.log("a variavel1 é do tipo string:", variavel1);
console.log("a variavel2 é do tipo number:", variavel2);
console.log("a variavel3 é do tipo booleana:", variavel3);
console.log("a variavel4 é do tipo array (é uma lista):", variavel4);
console.log("a variavel5 é do tipo object (simula objeto da vida real - com propriedade e valor):", variavel5);

console.log("variavel5.variavel3:", variavel5.variavel3);
console.log("variavel5.variavel1:", variavel5.variavel1);
console.log("variavel5.valorqualquer:", variavel5.valorqualquer);
console.log("variavel5.minhaFuncao:", variavel5.minhaFuncao);
variavel5.minhaFuncao(2, 3)

let numA = 5;
let numB = 7;
console.log(numA < numB);
console.log(numA > numB);


console.log("Criação da função maior ou menor");
function maiorMenor(numA, numB) {
    if (numA > numB) {
        console.log("o numero A é maior que o nmumero B");
    } else if (numA == numB) {
        console.log("o numero A é igual ao numero B");
    } else {
        console.log("o numero A é menor que o numero B");
    }
}

console.log("Criação da função maior ou menor 2");
function maiorMenor2(numA, numB) {
    if (numA > numB) {
        return "o numero A é maior que o nmumero B";
    } else if (numA == numB) {
        return "o numero A é igual ao numero B";
    } else {
        return "o numero A é menor que o numero B";
    }
}
console.log("chamando a função maior ou menor");
const retorno1 = maiorMenor(4, 8);
console.log("chamando a função maior ou menor 2");
const retorno2 = maiorMenor2(4, 8);

console.log("retorno1:", retorno1);
console.log("retorno2:", retorno2);
