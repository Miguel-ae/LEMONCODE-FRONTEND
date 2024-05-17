import React from "react";
import { animals } from "../mocks/animals.json";
import "./productList.css";


interface PictureInfo {
  id: number;
  picUrl: string;
  title: string;
}

interface ProductListProps {
  allProducts: PictureInfo[];
  setAllProducts: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}


export const ProductListCats: React.FC<ProductListProps> = ({
  allProducts,
  setAllProducts,
  selectedItems,
  setSelectedItems,
}) => {
  const onAddProduct = (cat: PictureInfo) => {
    if (selectedItems.includes(cat.id)) {
      setAllProducts(allProducts.filter((item) => item.id !== cat.id));
      setSelectedItems(selectedItems.filter((id) => id !== cat.id));
    } else {
      setAllProducts([...allProducts, cat]);
      setSelectedItems([...selectedItems, cat.id]);
    }
  };

  return (
    <div className="container-items">
      {animals.cats.map((cat) => (
        <div
          className={`item ${selectedItems.includes(cat.id) ? "selected" : ""}`}
          key={cat.id}
          onClick={() => onAddProduct(cat)}
        >
          <img className="fit-img-230" src={cat.picUrl} alt={cat.title} />
          <p>{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export const ProductListDogs: React.FC<ProductListProps> = ({
  allProducts,
  setAllProducts,
  selectedItems,
  setSelectedItems,
}) => {
  const onAddProduct = (dog: PictureInfo) => {
    if (selectedItems.includes(dog.id)) {
      setAllProducts(allProducts.filter((item) => item.id !== dog.id));
      setSelectedItems(selectedItems.filter((id) => id !== dog.id));
    } else {
      setAllProducts([...allProducts, dog]);
      setSelectedItems([...selectedItems, dog.id]);
    }
  };

  return (
    <div className="container-items">
      {animals.dogs.map((dog) => (
        <div
          className={`item ${selectedItems.includes(dog.id) ? "selected" : ""}`}
          key={dog.id}
          onClick={() => onAddProduct(dog)}
        >
          <img className="fit-img-230" src={dog.picUrl} alt={dog.title} />
          <p>{dog.title}</p>
        </div>
      ))}
    </div>
  );
};
