function teste() {
    let num = Number(prompt('Digite um número:'))
    
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR'
    } else {
        tipo = 'ÍMPAR'
    }

    let res = document.querySelector('#result')
    res.innerHTML = `<p>O número ${num} é ${tipo}!`
}