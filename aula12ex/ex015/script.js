var data = new Date()
var anotual = data.getFullYear()
function verificar() {
    var anonasc = window.document.getElementById('txtano')
    var nasc = Number(txtano.value)
    var idade = anotual - nasc
    /* res.innerHTML = `Você tem ${idade} anos de idade!` */
    if (idade < 12) {
        'img/garotinho'
    } 
}