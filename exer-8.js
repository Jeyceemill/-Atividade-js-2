
// Aplicando desconto em produtos 

// Objetivo: Criar um programa que permita ao usuário aplicar um desconto em um 

// determinado produto, de acordo com o código promocional informado. 

// Descrição: O programa deve solicitar ao usuário que informe um código promocional (DESC1, 

// DESC2, DESC3, DESC4 ou DESC5) através de um prompt seguindo a informação de descontos 

// a seguir: 

// • "DESC1 - 05% de desconto" 

// • "DESC2 - 10% de desconto" 

// • "DESC3 - 15% de desconto" 

// • "DESC4 - 20% de desconto" 

// • "DESC5 - 25% de desconto” 

// Usando a estrutura switch, o programa deve identificar qual foi o código promocional 

// informado pelo usuário e aplicar o desconto correspondente ao produto. 

// Após a aplicação do desconto, o programa deve exibir o valor original do produto e o valor 

// com desconto na tela. 

// Caso o usuário informe um código promocional inválido, o programa deve exibir uma 

// mensagem de “erro” na tela, informando que o mesmo não é um cupom válido. 

// Exemplo de uso: 

// Suponha que um usuário informe o código promocional DESC2. Nesse caso, o programa deve 

// exibir a mensagem "10% de desconto" na tela e aplicar um desconto de 10% no produto. Em 

// seguida, o programa deve exibir o valor original do produto (R$ 1000) e o valor com desconto 

// (R$ 900) na tela.



let codigopromocional = (prompt('Informe o seu código promocional(DESC1, DESC2,  DESC3,DESC4, DESC5)'))
let valorSemDesconto = parseFloat(prompt('Informe o valor do produto'));
let desconto;
let valorComDesconto;


switch (codigopromocional) {

    case 'DESC1':
        desconto = 0.05
        alert('5% de desconto')
        valorComDesconto = valorSemDesconto - (valorSemDesconto * desconto)

        break;

    case 'DESC2':
        desconto = 0.10
        alert('10% de desconto')
        valorComDesconto = valorSemDesconto - (valorSemDesconto * desconto)
        break;

    case 'DESC3':
        desconto = 0.15
        alert('15% de desconto')
        valorComDesconto = valorSemDesconto - (valorSemDesconto * desconto)
        break;

    case 'DESC4':
        desconto = 0.20
        alert('20% de desconto')
        valorComDesconto = valorSemDesconto - (valorSemDesconto * desconto)
        break;

    case 'DESC5':
        desconto = 0.25
        alert('25% de desconto')
        valorComDesconto = valorSemDesconto - (valorSemDesconto * desconto)
        break;

    default:

        alert("Erro");

        break;

}

alert(`Valor sem desconto: R$ ${valorSemDesconto.toFixed(2)} 
Valor com  desconto: R$ ${valorComDesconto.toFixed(2)}`);





