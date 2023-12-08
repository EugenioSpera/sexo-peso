let maiorPeso = 0;
let totalPessoas = 0;
let maiorCem = 0;
let media;
let peso;
let pessoas;
let totalPeso = 0;
let i
for ( i = 1; i <= 8; i++) {
    peso = Number(prompt('Digite o seu peso'))

    totalPeso += peso 
    totalPessoas++


    if (peso > 100) {
        maiorCem++
    }

    if (peso > maiorPeso) {
        maiorPeso = peso
    }

    

}

media = (totalPeso / 8 )

alert("A media de peso é: " + media + "Total de pessoas que pesam mais que 100kg é: " + maiorCem + "Total de pessoas é: " + totalPessoas+ "O maior peso é: " + maiorPeso)
