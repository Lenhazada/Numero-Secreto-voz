const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(`O número aleatório é ${numeroAleatorio}`);

const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");

elementoMenorValor.innerHTML = menorValor;

elementoMaiorValor.innerHTML = maiorValor;
