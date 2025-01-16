import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handlePayment = () => {
    alert("Paiement effectué avec succès !");
  };

  return (
    <div>
      <h1>Paiement</h1>
      <div>
        <h3>Mode de paiement</h3>
        <label>
          <input
            type="radio"
            value="espèces"
            checked={paymentMethod === "espèces"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Espèces
        </label>
        <label>
          <input
            type="radio"
            value="carte"
            checked={paymentMethod === "carte"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Carte
        </label>
      </div>
      <div>
        <h3>Adresse de livraison</h3>
        <input
          type="text"
          placeholder="Adresse"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Numéro de téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Payer</button>
    </div>
  );
};

export default Payment;
