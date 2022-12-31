let nomes = ['Luiza', 'Marcela', 'Carlos', 'Cleide']
nomes.push('pedro') // Adiciona Pedro ao final do Array
nomes.unshift('Ângela') // Adiciona Ângela ao início (pode afetar a performance o programa)
const removido = nomes.pop() // Remove (Extoura) o último elemento do Array*
const removido1 = nomes.shift() // Remove o primeiro elemento do Array*
delete nomes[2] // Deleta o item, sem alterar o índice dos demais
console.log(removido)
console.log(removido1)
console.log(nomes)
