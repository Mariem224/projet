import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulez une vérification de session ici
    navigate("/pizza-selection"); // Redirige vers la sélection de pizza après connexion
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Mot de passe" required /><br />
        <button type="submit">Se connecter</button>
      </form>
      <p>Pas encore inscrit ?</p>
      <Link to="/signup">Créer un compte</Link>
    </div>
  );
};

export default Login;
