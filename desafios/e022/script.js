function contar() {
    let res = document.querySelector('#res')
    res.innerHTML = 'Contando de 1 a 10, marcando os pares'

    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0){
            res.innerHTML += `<mark><strong>${cont}</mark> &#x1f449`
        } else {
            res.innerHTML += `${cont} &#x1f449`
        }
        cont ++ // cont = cont + 1
    }
    res.innerHTML += '&#x1f3c1'
}