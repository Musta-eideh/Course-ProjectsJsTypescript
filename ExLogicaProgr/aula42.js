// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number);
//Retorne true se a imagem estiver no modo paisagem.

// var paisagem;

// function ePaisagem(x, y) {
//     paisagem = false;
//     if(x > y) {
//         paisagem = true;
//     }
// }

// Resolução:

// function ePaisagem(largura, altura) {
//     return largura >= altura;
// }
// console.log(ePaisagem(1080,1920));

//Arrow function expressions:

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080,1920));