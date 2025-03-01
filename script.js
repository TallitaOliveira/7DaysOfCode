/* Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}*/ 


//                       RESULTADO                     //
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'
// Exercicio (1) Comparando 1 e '1' 
if (numeroUm == stringUm && numeroUm !== stringUm){
    console.log ('As variaveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes'); 
}else{
    console.log ('As variaveis numeroUm e stringUm não tem o mesmo valor'); 
}
//Exercicio (2) Comparando 30 e '30' 
if (numeroTrinta === stringTrinta){
    console.log ('As variaveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes'); 
}else{
    console.log ('As variaveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}
// Exercicio (3) Comparando 10 e '10' 
if (numeroDez == stringDez && numeroDez !== stringDez){
    console.log ('As variaveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes'); 
}else{
    console.log ('As variaveis numeroDez e stringDez não tem o mesmo valor');
}