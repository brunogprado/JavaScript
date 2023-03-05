function media() {
    let name = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`N1 de ${name}:`))
    let n2 = Number(prompt(`Além de ${n1}, N2 de ${name}:`))
    let med = (n1 + n2) / 2
    let msg
    if (med >= 6) {
        msg = 'Parabéns!'
    } else {
        msg = 'Estude mais!'
    }
    let res = document.querySelector('#situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${name}</mark>.`
    res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}.`
    res.innerHTML += `<p>A média final será ${med}.`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red'>${msg}`
}