function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div style="color: #FF204E;">Valor inválido!</div'
        return 
    }

    if(numeroEntreOPermitido(numero)) {
        elementoChute.innerHTML += `<div style="color:#FFEA20;"> Valor inválido: o número secreto precisa estar entre <span style="color:#16FF00;">${menorValor}</span> e <span style="color:#16FF00;">${maiorValor}</span </div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3> <span style="color:#FFEA20;">O número secreto era </span><strong style = "color: #49FF00;">${numeroSecreto}</strong><span style="color:#FFEA20;">!!!<span></h3>
        
        <button id="tentar-novamente" class="btn-tentar">Tentar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div class="o-numero-e">O número secreto é menor <span class="material-symbols-outlined" style="color:#FF004D">south</span></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div class="o-numero-e">O número secreto é maior <span class="material-symbols-outlined" style="color:#45FFCA;">north</span></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroEntreOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'tentar-novamente') {
        window.location.reload()
    }
})