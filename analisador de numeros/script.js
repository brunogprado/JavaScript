function adicionar() {
    let num = document.querySelector('#txtnum')
    let n = Number(num.value)
    let res = document.querySelector('#txttab')
    res.innerHTML = ''
    let item = document.createElement('option')
    item.text += `Valor ${n} adicionado.`
    res.appendChild(item)
}
