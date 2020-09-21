import React from "react";

const Footer = ({ nbproduits }) => {
  return (
    <React.Fragment>
      <footer className="navbar navbar-light bg-light">
      <div className="col-10 offset-1">
        <a className="navbar-brand" href="#top">
            Retour vers le haut de page
        </a>
        <span className="badge badge-pill badge-secondary" id="bas">
            Nombre de produits : {nbproduits}
        </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;