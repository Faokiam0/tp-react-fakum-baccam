// import React, { Component } from "react";
import React from "react";

const NavBar = ({ nbproduits }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <h1>Liste de course</h1>
        <a className="navbar-brand" href="#top">
          <span className="badge badge-pill badge-secondary">
            Nombre de produits : {nbproduits}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
