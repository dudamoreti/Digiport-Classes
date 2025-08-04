//               012345678
let umaString = "um texto"
umaString[3]                        // Retorna o caractere na posição 3 (índice) = t
umaString.charAt(4)                // Mesma lógica, retorna o caractere na posição 4
umaString.concat(" um", " texto")   // Concatena várias strings = "um texto um texto"
umaString.replace("um", "outro")    // Subtitui o "um" por "outro" = outro texto
umaString.length                    // Retorna o comprimento da string
umaString.slice(0, 2)               // Corta do índice 0 ao 2 (exclusivo) = "Um"
umaString.slice(2, 4)               // Corta do índice 2 ao 4 (exclusivo) = " t" (espaço + t)

console.log(umaString[4])
console.log(umaString.charAt(3))
console.log(umaString.charAt(4))
console.log(umaString.replace("texto","sopa"))
console.log(umaString.slice(0, 2))
console.log(umaString.slice(2,4))



//console.log(umaString[4])
//console.log(umaString.charAt(3))
//console.log(umaString.concat(" um", " outro"))
//console.log(umaString.replace("um", "outro"))
console.log(umaString.length)