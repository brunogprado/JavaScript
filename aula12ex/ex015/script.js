function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (nasc.value.length == 0 || nasc.value > ano) {
        alert('[ERRO] Verifique os dados!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - nasc.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/menininho.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/garoto.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem.png')
            } else {
                img.setAttribute('src', 'img/senhor.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/menininha.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/garota.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.png')
            } else {
                img.setAttribute('src', 'img/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}