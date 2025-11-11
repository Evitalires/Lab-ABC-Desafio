// import { abecedario } from "./scripts"
const abecedario = ["a", "b", "c"];
let position = 0;

console.log(abecedario); // ["a", "b", "c"]

const imagenLetra = document.getElementById("imagen-letra")
const letraAnterior = document.getElementById("letra-anterior");
const letraSiguiente = document.getElementById("letra-siguiente");

// ✅ Llamamos correctamente las funciones
letraAnterior.addEventListener("click", () => cambiarLetra("prev"));
letraSiguiente.addEventListener("click", () => cambiarLetra("next"));

function cambiarLetra(type) {
  const letra = document.getElementById("letra");

  if (type === "next" && position < abecedario.length - 1) {
    position += 1;
  } else if (type === "prev" && position > 0) {
    position -= 1;
  }

  letra.innerText = abecedario[position];
  imagenLetra.style.backgroundImage = `url('/imagenes/${abecedario[position]}.png')`

  console.log("Posición:", position);
  console.log("Letra actual:", letra.innerText);
}