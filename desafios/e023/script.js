function contar() {
    let res =  document.querySelector('#res')
    res.innerHTML = 'Números pares de 1 até 10:<br>'
    let cont = 2
    while (cont <= 10) {
            res.innerHTML += `${cont} &#x1f449`
            cont += 2
        }
        res.innerHTML += '&#x1f3c1'
    }