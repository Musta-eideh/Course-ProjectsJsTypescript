//Escreva uma função que recebe dois números e retorne o maior deles

// let numUm = prompt("Digite um número: ");
// let numDois = prompt("Digite outro número: ")

// if(numUm > numDois) {
//     console.log(numUm)
// }else{
//     console.log(numDois)
// }

// Resolução:
function max(x, y) {
    if (x > y) {
        return x;
    } else{
        return y;
    }
}

// Ou:

// const max2 = (x, y) => {
//     return x > y ? x : y;
// };

//Ou:

// const max2 = (x, y) => x > y ? x : y;