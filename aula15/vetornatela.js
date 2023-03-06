let valores = [8, 1, 7, 4, 2]
valores.sort()

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
}

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(7))
if (valores.indexOf == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${valores.indexOf()}`)
}

let pos = valores.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}