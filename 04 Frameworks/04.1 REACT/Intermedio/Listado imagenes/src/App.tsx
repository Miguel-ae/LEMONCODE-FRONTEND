import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { ProductListCats, ProductListDogs } from "./components/ProductList";
import { Cart } from "./components/Cart";

const App: React.FC = () => {

  interface PictureInfo {
    id: number;
    picUrl: string;
    title: string;
  }

  const [allProducts, setAllProducts] = useState<PictureInfo[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Buttons />
        <Routes>
          <Route 
          path="/"
          element={<h3>Seleccione categoria</h3>}
          />
          <Route
            path="/cats"
            element={
              <ProductListCats
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            }
          />
          <Route
            path="/dogs"
            element={
              <ProductListDogs
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            }
          />
        </Routes>
        <Cart
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </Router>
  );
};

export default App;
