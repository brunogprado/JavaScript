function maior() {
    n1 = Number(prompt('Digite um número:'))
    n2 = Number(prompt('Digite outro número:'))

    let res = document.querySelector('#saida')
    if (n1 > n2) {
        res.innerHTML = `Analisando ${n1} e ${n2}, o maior valor é ${n1}`
    } else if (n1 < n2) {
        res.innerHTML = `Analisando ${n1} e ${n2}, o maior valor é ${n2}`
    } else {
        res.innerHTML = `Analisando ${n1} e ${n2}, ambos são iguais!`
    }
}