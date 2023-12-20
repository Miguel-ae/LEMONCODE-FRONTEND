import logoImg from "./content/outer-wilds-logo.jpeg";

// Insertar img
export const insertImage = () => {
    const img = document.createElement("img");
    img.src = logoImg;
    const imgContainer = document.getElementById("img-container");
    if (imgContainer) {
      imgContainer.appendChild(img);
    }
}