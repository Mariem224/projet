import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PizzaSelection = () => {
  const navigate = useNavigate();

  // Données disponibles pour les pizzas et les tailles
  const pizzaTypes = [
    "Pizza Margherita",
    "Pizza Hawaïenne",
    "Pizza Pesto Artichaut et Burrata",
    "Pizza Tomate Fromage",
    "Pizza Calzone",
    "Pizza Bianca",
    "Pizza Quatre Fromages",
  ];

  const pizzaSizes = [
    { label: "Mini", price: 5 },
    { label: "Moyenne", price: 8 },
    { label: "Grande", price: 12 },
  ];

  // État pour les choix du formulaire
  const [selectedPizza, setSelectedPizza] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [orderSummary, setOrderSummary] = useState(null);

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPizza || !selectedSize) {
      alert("Veuillez sélectionner une pizza et une taille.");
      return;
    }

    const sizeInfo = pizzaSizes.find((size) => size.label === selectedSize);

    setOrderSummary({
      pizza: selectedPizza,
      size: selectedSize,
      price: sizeInfo.price,
    });
  };

  // Rediriger vers la page de paiement
  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Choisissez votre pizza</h1>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        {/* Sélection du type de pizza */}
        <label>
          <h3>Type de pizza :</h3>
          <select
            value={selectedPizza}
            onChange={(e) => setSelectedPizza(e.target.value)}
            required
          >
            <option value="">-- Choisissez une pizza --</option>
            {pizzaTypes.map((pizza, index) => (
              <option key={index} value={pizza}>
                {pizza}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Sélection de la taille de pizza */}
        <label>
          <h3>Taille de pizza :</h3>
          {pizzaSizes.map((size, index) => (
            <div key={index}>
              <input
                type="radio"
                name="size"
                value={size.label}
                onChange={(e) => setSelectedSize(e.target.value)}
                required
              />
              <label>{size.label} ({size.price}dt)</label>
            </div>
          ))}
        </label>
        <br />

        {/* Bouton pour soumettre le formulaire */}
        <button type="submit">Valider ma commande</button>
      </form>

      {/* Récapitulatif de la commande */}
      {orderSummary && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h2>Récapitulatif de votre commande :</h2>
          <p>
            <strong>Pizza :</strong> {orderSummary.pizza}
          </p>
          <p>
            <strong>Taille :</strong> {orderSummary.size}
          </p>
          <p>
            <strong>Prix :</strong> {orderSummary.price}dt
          </p>
          <button onClick={handlePayment}>Aller au paiement</button>
        </div>
      )}
    </div>
  );
};

export default PizzaSelection;
