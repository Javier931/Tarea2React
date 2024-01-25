import React from "react";

export const Paginas = ({ prev, next, anterior, siguiente }) => {
  const paginaAnterior = () => {
    anterior();
  };

  const paginaSiguiente = () => {
    siguiente();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={paginaAnterior}>
              Pagina Anterior
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={paginaSiguiente}>
              Pagina Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
