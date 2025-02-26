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