let teclado = {
    marca: "Redragon",
    modelo: "Teclado Mecanico",
    ano: 2020,
    cor:"preto"
}
console.log(teclado1)


let teclado1 = new Object ()
teclado1.marca = "Redragon"
teclado1.modelo = "Teclado mecanico"
teclado1.ano = 2020
teclado1.cor = "preto"

console.log(teclado1)
 

let vetor= []
    for(let i=0;i<4;i++) {
        // criar objeto
        let objeto = {
            nome: prompt(`Informe o nome do produto`),
            qtde: Number(prompt(`Informe a quantidade de produto`)),
            preco: Number(prompt(`Informe o preço do produto`)),
        }
        // adicionar o objeto no vetor
        vetor.push(objeto)
    }
// Calcular a media de preço dos produtos //
    let soma = 0    
    for(let i=0;i<4;i++) {
        soma = soma + vetor[i].preco
    }
    console.log(`A média é de ${soma/4}`)



