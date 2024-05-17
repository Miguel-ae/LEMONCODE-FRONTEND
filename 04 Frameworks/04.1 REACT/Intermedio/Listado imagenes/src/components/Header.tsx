import "./header.css";
import { LogoIcon } from "./Icons";

export const Header = () => {
  return (
    <>
      <h1 className="main-title">
        <LogoIcon size="50" className="logo" />
        BANCO DE IMÁGENES
      </h1>

      <br />
      <br />
    </>
  );
};
