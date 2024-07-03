const prompt = require("prompt-sync")({sigint:true});

function calcular(operacao, num1, num2) {
    let resultado;

    if (operacao === '+') {
        resultado = num1 + num2;
    } else if (operacao === '-') {
        resultado = num1 - num2;
    } else if (operacao === '*') {
        resultado = num1 * num2;
    } else if (operacao === '/') {
        if (num2 === 0) {
            resultado = 'Erro: divisão por zero';
        } else {
            resultado = num1 / num2;
        }
    } else if (operacao === '%') {
        resultado = (num1 * num2) / 100;
    } else {
        resultado = 'Operação inválida';
    }
 return resultado;
}

let operacao = prompt("Digite a Operação Desejada (+ para adição,- para subtração,* para multiplicação,/ para divisão, % para porcentagem:").toLowerCase();
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = calcular(operacao, num1, num2);
console.log(`Resultado da operação ${operacao} entre ${num1} e ${num2} é: ${resultado}`);