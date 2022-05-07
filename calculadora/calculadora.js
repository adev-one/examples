//node calculadora.js somar 1 45

const operacao = process.argv[2];
const numeroUm = parseInt(process.argv[3]);
const numeroDois = parseInt(process.argv[4]);

if(!operacao || !numeroUm || !numeroDois) {
    console.log('Você precisar informar a operacao(somar, subtrair, dividir, multiplicar) e os dois numeros');
    process.exit();
}

const operacoesValidas = ["somar", "subtrair", "dividir", "multiplicar"];

if (!operacoesValidas.includes(operacao)) {
    console.log('Operacao Invalida, escolha uma das seguintes: somar, subtrair, dividir, multiplicar');
    process.exit();
}

if (operacao == "somar") {
    const soma = numeroUm + numeroDois;
    console.log(`O resultado da soma é: ${soma}`)
    process.exit();
}

if (operacao == "subtrair") {
    const subtracao = numeroUm - numeroDois;
    console.log(`O resultado da subtracao é: ${subtracao}`)
    process.exit();
}

if (operacao == "dividir") {
    const divisao = numeroUm / numeroDois;
    console.log(`O resultado da divisao é: ${divisao}`)
    process.exit();
}

if (operacao == "multiplicar") {
    const multiplicacao = numeroUm * numeroDois;
    console.log(`O resultado da multiplicacao é: ${multiplicacao}`)
    process.exit();
}

// const operacoes = {
//     somar: (numeroUm, numeroDois) => {
//         return numeroUm + numeroDois;
//     },
//     subtrair: (numeroUm, numeroDois) => {
//         return numeroUm - numeroDois;
//     },
//     multiplicar: (numeroUm, numeroDois) => {
//         return numeroUm * numeroDois;
//     },
//     dividir: (numeroUm, numeroDois) => {
//         return numeroUm / numeroDois;
//     },
// }

// const calcular = operacoes[operacao];
// const resultado = calcular(numeroUm, numeroDois);

// console.log(`O resultado é: ${resultado}`);