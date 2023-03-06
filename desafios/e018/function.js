let res = document.querySelector('#res')
let computador = 0
let jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR!`
    } else {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou, eu tinha jogado ${computador}.`
        document.querySelector('#botao').style.visibility = 'hidden'
    }
}