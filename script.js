function pesoMedia() {

    let npessoas;
    let maiorpeso = 0;
    let totalpessoas;
    let maiorcem;
    let media;

    for (let i = 1 ; i <= 8; i = i++) { 
        let peso = Number(prompt('Digite o peso da ' + i + 'º pessoa'))
        
        if (peso > maiorpeso){
            maiorpeso = peso
}

        total = total + peso

        if(peso > 100){
            maiorcem++
 }
        alert("O maior peso é"+ maior peso)
        alert("A quantidade de pessoas que pesam mais de 100 kg é" + maiorcem)
        alert("A média dos pesos é" + media )


 }
        
        
    /*    <p>Número
        <input type="number" id="inNumero">
    </p>
    <p>
        <input type="button" value="Decrescer até 1" id="btDecrescer">
    <h3 id="outResposta"></h3>
    </p>*/  
