// Crie um programa que pergunte ao usuário um número de 1 a 7 e exiba o dia da
// semana correspondente.

// let semana = Number(prompt('Digite um número de 1 a 7'));

// switch (semana) {
//     case 1:
//         alert("O dia da semana  é domingo");
//         break;
//     case 2:
//         alert("O dia  da semana é segunda-feira");
//         break;
//     case 3:

//         alert("O dia da semana é terça-feira");
//         break;
//     case 4:
//         alert("O dia da semana é quarta-feira");
//         break;
//     case 5:
//         alert("O dia da semana é quinta-feira");
//         break;

//     case 6:
//         alert("O dia da semana  é sexta-feira");
//         break;


//     case 7:
//         alert("O dia da semana é sábado ");

//         break;

//     default:
//         alert("Número inválido.Por favor, digite um número entre 1 e 7");

//         break;
// }

let numero = Number(prompt('Digite um número de 1 a 7'));
let dia; 

switch (numero) {
    case 1:
         dia =("Domingo");
        break;
    case 2: 
        dia =("Segunda-feira");
        break;
    case 3:

        dia = ("Terça-feira");
        break;
    case 4:
        dia = ("Quarta-feira");
        break;
    case 5:
        dia = ("Quinta-feira");
        break;

    case 6:
        dia = (" Sexta-feira");
        break;


    case 7:
        dia = ("Sábado");

        break;

    default:
        alert("Número inválido.Por favor, digite um número entre 1 e 7");

        break;
}
alert(`O dia da semana é ${dia}`);