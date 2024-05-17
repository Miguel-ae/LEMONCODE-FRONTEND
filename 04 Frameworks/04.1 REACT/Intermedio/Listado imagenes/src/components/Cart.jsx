import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.tsx";
import "./Cart.css";

export function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon size="36" />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="src/assets/img/gatos/Bengali Cat.png" alt="Bengali Cat" />
            <div>
              <strong>Gato</strong>
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon size="20"/>
        </button>
      </aside>
    </>
  );
}
