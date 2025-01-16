import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PizzaSelection from "./components/PizzaSelection";
import Payment from "./components/Payment";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/login">Connexion</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Bienvenue sur Pizza Time !</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pizza-selection" element={<PizzaSelection />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
