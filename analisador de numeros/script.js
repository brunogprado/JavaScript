function adicionar() {
    let num = document.querySelector('#txtnum')
    let tab = document.querySelector('#seltab')
    if  (num.value.length == 0) {
        alert ('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        
        let item = document.createElement('option')
        item.innerHTML += `Valor ${n} adicionado.`
        tab.appendChild(item)
        
    }
}
