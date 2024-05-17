//import { useState } from "react";
//import "./ListOfAnimal.css"
//
//// Componente reutilizable para la lista de animales
//export function AnimalList({ animals }) {
//  const [selectedIds, setSelectedIds] = useState(new Set());
//
//  const handleAnimalClick = (animalId) => {
//    const updatedSelectedIds = new Set(selectedIds);
//
//    // Si el ID del animal ya está seleccionado, lo deseleccionamos; de lo contrario, lo seleccionamos
//    if (selectedIds.has(animalId)) {
//      updatedSelectedIds.delete(animalId);
//    } else {
//      updatedSelectedIds.add(animalId);
//    }
//
//    setSelectedIds(updatedSelectedIds);
//  };
//
//  return (
//    <main className="animals">
//      {animals.map((animal) => (
//        <div
//          key={animal.id}
//          onClick={() => handleAnimalClick(animal.id)} //Editar más adelante....
//          className={selectedIds.has(animal.id) ? "selected" : ""}
//        >
//          <img className="fit-img-230" src={animal.picUrl} alt={animal.title} />
//          <p>{animal.title}</p>
//        </div>
//      ))}
//    </main>
//  );
//}
//
//// Componente para la lista de gatos
//export function ListOfCats({ listofcats }) {
//  return <AnimalList animals={listofcats.cats} />;
//}
//
//// Componente para la lista de perros
//export function ListOfDogs({ listofdogs }) {
//  return <AnimalList animals={listofdogs.dogs} />;
//}
//