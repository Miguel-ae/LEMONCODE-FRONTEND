import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [search, setSearch] = React.useState<string>("lemoncode");
  const [searchInput, setSearchInput] = React.useState<string>("lemoncode");
  const [error, setError] = React.useState<string>("");

  const searchMembers = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/orgs/${searchInput}/members`
      );
      if (!response.ok) {
        throw new Error("No hay respuesta");
      }
      const json = await response.json();
      setMembers(json);
      setSearch(searchInput); // Actualiza la variable 'search' después de la búsqueda
      setError(""); // Limpiar el mensaje de error si la búsqueda tiene éxito
    } catch (error) {
      setMembers([]);
      setError("Error en la búsqueda de datos. No se encontraron usuarios de la organización");
    }
  };

  React.useEffect(() => {
    searchMembers(); // Llamamos a searchMembers cuando se renderiza el componente de forma inicial
  }, []); // Vacío para que solo se ejecute una vez al renderizar el componente

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    searchMembers();
  };

  return (
    <>
      <input
        type="text"
        placeholder="lemoncode"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      <h2>Usuarios de GitHub de {search}</h2>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Name</span>
          {members.map((member) => (
            <React.Fragment key={member.id}>
              <img src={member.avatar_url} alt="" />
              <span>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </React.Fragment>
          ))}
        </div>
      )}
      <Link to="/detail">Navegar a la página de detalle</Link>
    </>
  );
};
