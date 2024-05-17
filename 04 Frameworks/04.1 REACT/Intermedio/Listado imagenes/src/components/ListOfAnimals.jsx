import React from "react";
import "./ListOfAnimal.css"

// Componente reutilizable para la lista de animales
export function AnimalList({ allAnimals, setAllProducts }) {

  const AddProduct = (animal) => {
    setAllProducts([...allAnimals, animal])
    console.log(allAnimals)
  }


  return (
    <main className="animals">
      {allAnimals.map((animal) => (
        <div
          key={animal.id}
          onClick={() => AddProduct(animal)} //Editar más adelante....
        >
          <img className="fit-img-230" src={animal.picUrl} alt={animal.title} />
          <p>{animal.title}</p>
        </div>
      ))}
    </main>
  );
}

// Componente para la lista de gatos
export function ListOfCats({ listofcats }) {
  return <AnimalList animals={listofcats.cats} />;
}

// Componente para la lista de perros
export function ListOfDogs({ listofdogs }) {
  return <AnimalList animals={listofdogs.dogs} />;
}
