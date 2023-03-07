function tabuada() {
    let saida = document.querySelector('#saida')
    let n = Number(document.getElementById('fnum').value)
    saida.innerHTML = `<h2>Tabuada do ${n}`

    let c = 0
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}<br>`
        c ++
    }
}