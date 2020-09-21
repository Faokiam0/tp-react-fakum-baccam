// import React, { Component } from "react";
import React from "react";

const NavBar = ({ nbproduits, total }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light" id="top">
        <h1>Liste de course</h1>
        <a className="navbar-brand" href="#bas">

          <span className="mx-3">Ajouter un produit</span>
          <span className="badge badge-pill badge-secondary">
            Nombre de produits : {nbproduits} Total : {total}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
