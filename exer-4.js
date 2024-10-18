// 4- Atividades relacionais: crie um programa que solicite ao usuário que digite a sua 

// altura em metros e o seu peso em quilogramas. Em seguida, o programa deve 

// calcular o índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / 

// altura*2 e verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O 

// programa deve imprimir na tela se o IMC está dentro do intervalo saudável ou não.

/// Deu certo assim:

// let metros, quilogramas, calculometros, calculoImc


// metros = parseFloat(prompt("Digite a sua altura em metros"))


// quilogramas = parseFloat(prompt("Digite o seu peso em quilogramas "))

// calculometros = metros ** 2


// calculoImc = quilogramas / calculometros


// if (calculoImc >= 18.5 && calculoImc <= 24.9) {

//     alert(" Seu IMC é " + calculoImc.toFixed(2) + " Você está dentro do intervalo saudável ");
// }
// else {

//     alert(" Seu IMC é " + calculoImc.toFixed(2) + " Você está fora do intervalo saudável ");

// }

/////////////// Mas fica melhor assim:



let metros, quilogramas, calculoImc


metros = parseFloat(prompt("Digite a sua altura em metros"))


quilogramas = parseFloat(prompt("Digite o seu peso em quilogramas "))


calculoImc = quilogramas / (metros ** 2)


if (calculoImc >= 18.5 && calculoImc <= 24.9) {

    alert(" Seu IMC é " + calculoImc.toFixed(2) + " Você está dentro do intervalo saudável ");
}
else {

    alert(" Seu IMC é " + calculoImc.toFixed(2) + " Você está fora do intervalo saudável ");

}



