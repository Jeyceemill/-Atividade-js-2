// 3- Faça um programa que peça ao usuário para digitar um número inteiro. Se o número 
// for positivo, exiba uma mensagem informando que o número é positivo. Se o 
// número for negativo, exiba uma mensagem informando que o número é negativo. 
// Se o número for igual a zero, exiba uma mensagem informando que o número é zero. 
// (Aplicar no Console (?)).

let numero = Number(prompt("Digite um número inteiro"));

if (numero > 0) {
    alert("Número positivo");
    console.log("Número positivo");

}

else if (numero < 0) {
    alert("Número  negativo");
    console.log("Número  negativo");

}

else {
    alert("Número é zero");
    console.log("Número é zero");

}