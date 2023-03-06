function contar() {

    let res = document.querySelector('#res')
    res.innerHTML = '<h2>Contagem regressiva de 10 a 1'

    let cont = 10
    
    while (cont >= 1) {
        res.innerHTML += `${cont} &#x1f449`
        cont --
    }
    res.innerHTML += '&#x1f3c1'
}