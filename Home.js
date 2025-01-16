import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenue chez Pizza Time</h1>
      <p>Commandez vos pizzas préférées en quelques clics !</p>
      <Link to="/login">
        <button>Se connecter</button>
      </Link>
    </div>
  );
};

export default Home;
