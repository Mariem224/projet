import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Logique pour créer un compte ici
    navigate("/login"); // Redirige vers la connexion après inscription
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Créer un compte</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Nom complet" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Mot de passe" required /><br />
        <button type="submit">S'inscrire</button>
      </form>
      <p>Déjà inscrit ?</p>
      <Link to="/login">Se connecter</Link>
    </div>
  );
};

export default Signup;
