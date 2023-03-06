function estação() {
    let mês = prompt('Digite o mês em extenso (ex: Agosto)')
    let res = document.querySelector('#res')
    let estação
    switch (mês.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estação = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break;
    }
    res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <strong>${estação}`
}