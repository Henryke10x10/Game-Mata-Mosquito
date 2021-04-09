
var altura = 0
var largura = 0
vidas = 1
var tempo = 30
var criaMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    var criaMosquitoTempo = 2000
} else if(nivel === 'dificil') {
    var criaMosquitoTempo = 1400
} else if(nivel === 'chuckNorris') {
    var criaMosquitoTempo = 900
}

function display() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

display()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.querySelector('#cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica() {

    if(document.querySelector('#mosquito') ) {
        document.querySelector('#mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('vida' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 4)
    console.log(classe)

    switch(classe) {
        case 0:
            return 'mosquito-1'
        case 1:
            return 'mosquito-2'
        case 2:
            return 'mosquito-3'
        case 3:
            return 'mosquito-4'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch(classe) {
        case 0:
            return 'lado-a'
        case 1:
            return 'lado-b'
    }
}

