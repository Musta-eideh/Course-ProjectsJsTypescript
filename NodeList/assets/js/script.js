const paragrafo = document.querySelector('.paragrafos');
 const frases = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

 for (let p of frases) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFF'
}