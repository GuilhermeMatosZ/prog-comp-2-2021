//Faça um programa em linguagem JavaScript que receba 12 nomes dos jogadores de basquete do SESI FRANCA e armazene-os em um vetor. Ainda, o programa deve receber a média de pontos que cada jogador teve no último campeonato do NBB. Em seguida, o programa deve calcular e mostrar:
//a) a média de pontos do time
//b) o nome do jogador com mais pontos no campeonato, mostrando também este maior ponto
//c) os nomes dos jogadores que fizeram número de pontos pares
//


fuction questao2() {
    // Declaração de vetor
    //for = percorrer o vetor //

    let jogadores = []
    let pontuacao = []
    for(let i=0;i<12;i++) {
        jogadores.push(prompt(`Informe o nome do jogador`))
        pontuacao.push(prompt(Number(`Informe a pontuacao do jogador ${jogadores[i]}`)))
    }
    let soma = 0
    for(let i=0;i<12;i++) {
        soma = soma + pontuacao[i] 
    }
    alert(`A média de pontuação do time é de ${soma/12}`)      
 // Calcular o cestinho
    let maior = 0
    let nome = ""
    for(let i=0;i<12;i++) {
        if (pontuacao[i] > maior ) {
            maior = pontuacao [i]
            nome = jogadores[i]
        }
    }
    console.log(`O cestinha do time é ${nome} com ${maior} pontos`)

    // Criar vetor de pontuacao
    let par = []
    for(let i=0;i<12;i++) {
        if (pontuacao[i] % 2 == 0){
        par.push(jogadores[i])
        }
    }
    alert(par)   
}

let questao1 = () => {
    let whatsapp = 0
    let email = 0
    let papel = 0
    let tf = 0
    let ava = 0

    do {
        opcao = Number(prompt(`Informe uma opção`))
        switch(opcao) {
            case 1: ava++
                    break
            case 2: papel++
                    break  
            case 3: whatsapp++
                    break
            case 4: email++
                    break
            case 5: tf++
                    break
            default: alert(`Opção inválida`)                          
        }
    }
    while (opcao !=0)
    console.log(`Ava - ${ava} Papel - ${papel} Whatsapp - ${Whatsapp} - Email ${email} - Tanto faz ${tf}`)
    console.log(`${tf/(ava+papel+whatsapp+email+tf)*100}`)
    // Ordenar
    let troca
    for(let i=0;i<4;i++)
    if (ava > papel) {
        troca = ava; ava = papel; papel = troca
    }
    if (papel > whatsapp) {
        troca = papel; papel = whatsapp; whatsapp = troca
    }
    if (whatsapp > email) { 
        troca = whatsapp; whatsapp = email; email = troca   
    }
    if (email > tf) {
        troca = email; email = tf; tf = troca   
    }
    console.log(`${tf} ${email} ${whstapp} ${papel} ${ava}`)
}


