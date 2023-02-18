function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc1 = window.document.getElementById('txtano')
    var nasc = Number(nasc1.value)
    var idade = ano - nasc

    var sex = document.getElementsByName('sex')
    var gênero = ''

    var res = document.querySelector('#res')    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (nasc == 0 || nasc > ano) {
        alert('[ERRO] Verifique os dados!')
    } else {
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
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
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menininha.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/garota.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.png')
            } else {
                img.setAttribute('src', 'img/senhora.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}