/* Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" */



//                          RESULTADO                   //
let nome = prompt('Qual é o seu nome?'); 
let idade = Number(prompt('Quantos anos você tem?'));
let linguagem = prompt ('Qual linguagem de programação você está estudando?'); 

alert (`Olá ${nome}! você tem ${idade} anos, e já está aprendendo ${linguagem}!`)

let gostar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número (1) para SIM e número (2) para NÃO.`); 
if (gostar == 1){
    alert ('Muito bom! Continue estudando e você terá muito sucesso.'); 
}else if ( gostar == 2) {
    alert ('Ahh que pena... Já tentou aprender outras linguagens?'); 
}