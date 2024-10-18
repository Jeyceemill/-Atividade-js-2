// // Escreva um programa que classifique a idade de uma pessoa em diferentes
// // categorias: criança, adolescente, adulto e idoso.

let idade = Number (prompt("Digite a sua idade"))
let categoria;

switch (true) {
    case (idade >= 0 && idade <= 12):
        categoria = "Criança";
        break;
    case (idade >= 13 && idade <= 17):
        categoria = "Adolescente";
        break;
    case (idade >= 18 && idade <= 59):
        categoria = "Adulto";
        break;
    case (idade >= 60):
        categoria = "Idoso";
        break;
    default:
        categoria = "Idade inválida";
        break;
}

alert(`A categoria da idade  é ${categoria}`);

