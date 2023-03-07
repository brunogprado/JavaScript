function fatorial() {
    let saida = document.querySelector('#saida')
    let n = Number(document.getElementById('fnum').value)
    saida.innerHTML = `<h2>Calculando ${n}!`

    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c // fat = fat * c
        c --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}