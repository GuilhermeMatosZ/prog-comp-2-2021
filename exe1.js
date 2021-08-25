let sistemaVendas = () {

    let opcao
    let vetorVendedores = []
    let vendasVendas = []
    do {
        opcao = Numver(prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar venda \n3. Sair`))
        switch(opcao) {
            case 1: let objeto = {
                codigo: Number(prompt(`Informe código: `)),
                nome: prompt(`Informe o nome: `),
                rg: prompt(`Informe o Rg:`)
            }
            // Verificar se ja tem outro vendedor com o mesmo código
            let achou = false
            //.lenght = Retorna o tamanho do vetor(array)
            for(let i=0; i<vetorVendedores.length;i++) {
                if (vetorVendedores[i].codigo == objeto.codigo){
                    achou = true // achei - não posso cadastrar
                }              
            }
            if (!achou){
                // adiciona objeto no vetor
                vetorVendedores.push(objeto)
                alert(`Vendedor cadastrado com sucesso!`)
            }
            else {
                alert(`Vendedor já existe com este código`)
            }
            console.log(vetorVendedores)
            // adiciona objeto no vetor
                break
            case 2: let objeto = {
                codigo: Number(prompt(`Informe código do vendedor`)),
                mes: Number(prompt(`Informe o mês da venda`)),
                valor: Number(prompt(`Informe o valor da venda`))
            }
                let achou = false
                for(let i=0;i<vetvendas.length;i++){
                    vetVendas.push(objeto)
                }
                 
                break
            case 3: alert(`O programa será encerrado`)
                break
            default: alert(`Opção inválida`)                 
        }
    }
    while (opcao !=3)
}    