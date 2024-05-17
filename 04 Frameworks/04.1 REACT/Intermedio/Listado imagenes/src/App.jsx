import React from "react";
import { DogIcon, CatIcon } from "./components/Icons.tsx";
import { animals } from "./mocks/animals.json";
import { ListOfCats, ListOfDogs } from "./components/ListOfAnimals.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart.jsx"

function App() {
  return (
    <Router>
      <Link to="/">
        <h1 className="main-title">BANCO DE IMÁGENES</h1>
        <br />
        <br />
        
      </Link>

      <Link to="/dogs">
        <button className="button-animal-page">
          <DogIcon size="36" />
        </button>
      </Link>

      <Link to="/cats">
        <button className="button-animal-page">
          <CatIcon size="36" />
        </button>
      </Link>

      <hr />

      <h3>¡Selecciona tus imágenes favoritas!</h3>
      <br />

      <Cart />

      
      <Routes>
        <Route path="/dogs" element={<ListOfDogs listofdogs={animals} />} />
        <Route path="/cats" element={<ListOfCats listofcats={animals} />} />
      </Routes>
    </Router>
  );
}

export default App;
