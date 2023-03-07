function contagem() {
    let saida = document.querySelector('#saida')
    let num = Number(document.querySelector('#fnum').value)
    saida.innerHTML = `<h2>Contando de 0 até ${num}`
    let cont = 0
    while (cont <= num) {
        saida.innerHTML += `${cont} &#x1f449`
        cont ++
    }
    saida.innerHTML += `&#x1f3c1`
}