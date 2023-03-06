function contar() {
    let saida =  document.querySelector('#res')
    saida.innerHTML = '<h2>Contando de 1 até 10'

    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += `${cont} &#x1f449;`
        cont ++
    }
    saida.innerHTML += '&#x1f3c1;'
}