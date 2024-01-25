import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Personajeweb } from "./components/Personajeweb";
import { Paginas } from "./components/Paginas";

function App() {
  const [personajes, setPersonajes] = useState([]);

  const [info, setInfo] = useState({});

  const paginaUrl = "https://rickandmortyapi.com/api/character";

  const fetchPersonajes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
    console.log(personajes);
  };

  const onPrevio = () => {
    fetchPersonajes(info.prev);
  };

  const onSiguiente = () => {
    fetchPersonajes(info.next);
  };

  useEffect(() => {
    fetchPersonajes(paginaUrl);
  }, []);

  return (
    <>
      <Navbar brand={"Rick and Morty App"} />

      <div className="container mt-5">
        <Paginas
          prev={info.prev}
          next={info.next}
          anterior={onPrevio}
          siguiente={onSiguiente}
        />
        <Personajeweb personajeweb={personajes} />
      </div>
    </>
  );
}

export default App;
