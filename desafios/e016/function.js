function calcular() {
    var agora = new Date
    ano = agora.getFullYear()

    nasc = Number(prompt('Em que ano você nasceu?'))
    idade = ano - nasc

    saida = document.querySelector('#res')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.`
}