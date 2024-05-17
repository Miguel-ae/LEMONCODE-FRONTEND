import { useState } from "react";
import "./cart.css";
import { ClearCartIcon, CartIcon } from "./Icons";

interface Product {
  id: number;
  picUrl: string;
  title: string;
}

interface CartProps {
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Cart: React.FC<CartProps> = ({
  allProducts,
  setAllProducts,
  selectedItems,
  setSelectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del carrito

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Funcion para eliminar el elemento del carrito
  const onDeleteProduct = (product: Product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setAllProducts(results);
    setSelectedItems(selectedItems.filter((id) => id !== product.id));
  };

  // Funcion para vaciar todos los elementos del carrito
  const onDeleteAllProducts = () => {
    setAllProducts([]);
    setSelectedItems([]);
  };

  return (
    <div className="cart">
      <button onClick={toggleCart} className="cart-toggle cart-icon">
        <CartIcon size="30" />
      </button>
      {/* Contenido del carrito */}
      {isOpen && (
        <div className="cart-content">
          {allProducts && allProducts.length ? (
            <>
              {allProducts.map((product) => (
                <>
                  <div key={product.id} className="cart-item">
                    <img
                      className="cart-item-image"
                      src={product.picUrl}
                      alt={product.title}
                    />
                    {/* Imagen del producto */}
                    <div className="cart-item-info">
                      <span>{product.title}</span> {/* Título del producto */}
                      {/* Botón para eliminar el producto */}
                    </div>
                    <div
                      className="cart-item-clear"
                      onClick={() => onDeleteProduct(product)}
                    >
                      <ClearCartIcon size="26" />
                    </div>
                  </div>
                  <hr />
                </>
              ))}
              <div
                className="cart-item-clearAll"
                onClick={() => onDeleteAllProducts()}
              >
                Vaciar Carrito
              </div>
            </>
          ) : (
            <p>Tu carrito está vacío.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
