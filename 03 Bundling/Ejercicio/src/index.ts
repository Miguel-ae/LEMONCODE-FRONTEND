import './styles.scss';
import logoImg from "./content/outer-wilds-logo.jpeg";

// Insertar img
const img = document.createElement("img");
img.src = logoImg;
const imgContainer = document.getElementById("img-container");
if (imgContainer) {
  imgContainer.appendChild(img);
}

// Contador con barra
let count: number = 0;
const incrementButton = document.getElementById('incrementButton');
const counterElement = document.getElementById('counter');
const barElement = document.getElementById('bar');
if (incrementButton && counterElement && barElement) {
  incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count.toString();
    if (count === 100) {
      // Cambia el color de la barra cuando el contador llega a 100
      barElement.style.backgroundColor = '#e74c3c';
    }
    // Ajusta el ancho de la barra según el valor del contador
    barElement.style.width = `${count > 100 ? 100 : count}%`; // Limita el ancho al 100%
  });
}