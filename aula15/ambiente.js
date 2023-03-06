let num = [5, 8, 2]
num.sort()
num[3] = 11
num.push(10)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}