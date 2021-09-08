let gerenciaRedeSociais = () => {
    // Cadastrp das redes sociais
    letvetorRedesSociais = []
    for(let i=0;i<5;i++) {
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // Inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // Cdastro dos usuários.
    let vetorUsuarios = []
    for(let i=0;i<5;i++) {
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdeposts: Number(prompt(`Informe a quantidade de posts`))
        }
        // Só faremos isso se a rede social existir //
        let achou = false // Assumo que não encontrei a rede social
        let j = 0 // índice do vetor de rede sociais
        while (!achou && j<5 ) { // sai ou poq achou ou poq acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // Achamos
                vetorUsuarios.push(objeto) // Inserimos
                achou = true
            }
            j++
        }
        if (!achou) {
            alert(`Rede social não encontrada`)
        }
        VetorUsuários.push(objetos)
    }
    // exe1) o usuário informa a rede social e o programa retorna quantos posts foram feitos.
    
    let codigo = Number(prompt(`Informe o código da Rede Social`))
    let conta = 0
    for(let i=0;i<5;i++){// Percorrer vetor procurando //
        if (vetorUsuarios[i].codigoRedeSocial == codigo) {
            conta = conta + vetorUsuario[i].qtdeposts
        }
    }
    if (conta == 0) {
        console.log(`Não houve postagem ou rede social não existe`)
    }
    else {
        console.log(`A qautndiade de posts na rede social ${codigo} foi ${conta}`)
    }

    // exe2) o programa retorna quantos posts foram feitos em todas as rede sociais

    for (let i=0;i<5;i++) { // para cada rede social 
        let conta = 0
        for(let j=0;j<5;j++) { // procura nos usuários
            if(vetorUsuarios[i].codigo == vetorUsuarios[j].codigoRedeSocial) {
                conta = conta + vetorUsuarios[i].qtdeposts
            }
        }
        // terminou de soma os pots de uma rede social
        console.log(`A quantidade de post da rede social ${vetorRedesSociais[i].codigo} é ${conta}`)
    }

    // exe3) o usuário informa o login do usuário e o programa retorna qnts posts ele fez.
    let login = prompt(`Informe o login do usuário desejado`)
        // procurar o login no vetor de usuários
        let somaPosts = 0
        let achou = false // não encontrei o usuário
        for(let i=0;i<5;i++){
        if (login == vetorUsuarios[i].login){ // achei o usuário procurado
            somaPosts = somaPosts + vetorUsuarios[i].qtdeposts
            achou = true // achou o usuário
        }
    }
    if (achou){
        alert(`O usuário com o login ${login} realizou ${somaPosts}`)
    }
    else {
        alert(`Usuário não encontrado`)
    }
    // exe4) o programa retorna quantos posts forma feitos por cada usuários 
    let vetorUsuarioPosts = []
    for (let i=0;i<5;i++){ // para cada usuário do vetor

        let achou = false // não achou

        for(let j=0;j<vetorUsuarioPosts.length;j++) { // verifica se o usuário já existe

            if (vetorUsuarios[i].login == vetorUsuarioPosts[j].login) { // usuário já existe
                // soma a qtde de posts do usuário
                vetorUsuarioPosts[j].qtde = vetorUsuarioPosts[j].qtde + vetorUsuarios.qtdeposts
                achou = true
            }
        }
        // usuário ainda não existe no vetor vetorusuariosposts, então vamos criar
        if (!achou) { // vamos cariar usuário no vetor
                vetorUsuarioPosts.push({
                    login: vetorUsuarios[i].login,
                    qtde: vetorUsuarios[i].qtdeposts
                })
        }
    }  
}
// 2 vetor onde coloca os dados, dps faz outro vetor antes de inserir os dados no outro vetor tem que verificar no de cima tudo que tem dentro do de cima.

