function gerar() {
    let min = 1
    let max = 60
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('#res')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}`
}

function limpar() {
    let res = document.querySelector('#res')
    res.innerHTML = null
}