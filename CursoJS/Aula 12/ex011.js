var idade = 65
console.log(`Você tem ${idade} anos. logo,`)
if(idade < 16) {
    console.log('você Não vota.')
} else if(idade < 18 || idade > 65) {
    console.log('seu voto é opcional.')
} else {
    console.log('seu voto é obrigatório.')
}