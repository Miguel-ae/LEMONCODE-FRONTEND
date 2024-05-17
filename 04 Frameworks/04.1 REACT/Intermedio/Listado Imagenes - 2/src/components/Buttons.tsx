import { Link } from "react-router-dom";
import { CatIcon, DogIcon } from "./Icons";

export const Buttons = () => {
  return (
    <>
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
    </>
  );
};
