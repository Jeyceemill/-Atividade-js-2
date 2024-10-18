// Implemente um programa que realiza operações matemáticas básicas (adição,
// subtração, multiplicação e divisão) com base na escolha do usuário.

let asQuatrosOperacoes = (prompt("Escolha uma operação matemática (adição, subtração, multiplicação ou divisão)").toLowerCase());
let num1 = parseFloat(prompt("Digite  o primeiro número inteiro  "));
let num2 = parseFloat(prompt("Digite o segundo número inteiro"));
let resultado;


switch (asQuatrosOperacoes) {

    case "adição":
        resultado = (num1 + num2);
        break;

    case "subtração":

        resultado = (num1 - num2);
        break;

    case "multiplicação":
        resultado = (num1 * num2);
        break;

    case "divisão":
        if (num2 == 0) { alert("Não é permitido divisão por 0") }

        else {
            resultado = (num1 / num2);
            break;
        }
    default:
        alert(" Resultado inválido.Por favor,escolha uma das quatro operações (adição, subtração, multiplicação ou divisão) ");

        break;
}
alert(resultado.toFixed(2))