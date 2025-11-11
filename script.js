import { abecedario } from "./scripts/abecedario.js"

let position = 0;

console.log(abecedario); // ["a", "b", "c"]

const imagenLetra = document.getElementById("imagen-letra")
const letraAnterior = document.getElementById("letra-anterior");
const letraSiguiente = document.getElementById("letra-siguiente");

letraAnterior.addEventListener("click", () => cambiarLetra("prev"));
letraSiguiente.addEventListener("click", () => cambiarLetra("next"));

function colorAleatorioHex() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cambiarLetra(type) {
  const letra = document.getElementById("letra");


    if (type === "next") {
    // si es la última letra, vuelve al inicio
    position = (position + 1) % abecedario.length;
  } else if (type === "prev") {
    // si es la primera letra, vuelve al final
    position = (position - 1 + abecedario.length) % abecedario.length;
  }

    console.log(type === "prev" && position > 0);
    
    

    letra.innerText = abecedario[position];
    imagenLetra.style.backgroundImage = `url('./imagenes/${abecedario[position]}.png')`
    imagenLetra.style.backgroundColor = colorAleatorioHex();
    console.log(imagenLetra.style.backgroundImage);
  
    console.log("Posición:", position);
    console.log("Letra actual:", letra.innerText);
}
imagenLetra.style.backgroundImage = `url('./imagenes/${abecedario[0]}.png')`