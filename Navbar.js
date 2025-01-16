import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Suppression du token
    navigate("/"); // Redirection vers la page d'accueil
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/login">Connexion</Link>
        </li>
        <li>
          <Link to="/signup">Créer un compte</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Déconnexion</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
