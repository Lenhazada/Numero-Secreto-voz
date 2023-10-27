function verificaValorValido(chute) {
    const numero = +chute

    // if (chuteInvalido(numero)) {
    //     elementoChute.innerHTML += '<div>Valor inválido</div>'
    //     // alert('Valor Inválido')
    //     return
    // }

    if (chute.toUpperCase() === 'GAME OVER') {
        document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
        document.body.style.backgroundColor = "red"

    } else {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Diga um valor entre ${menorValor} e ${maiorValor}</div>`
        //alert('Valor inválido! Diga um valor entre ${menorValor} e ${maiorValor})
        return
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroAleatorio}!</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})