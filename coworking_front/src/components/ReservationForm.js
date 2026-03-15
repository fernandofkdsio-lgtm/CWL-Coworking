import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ReservationForm({ isLoggedIn, userName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    room_type: "",
    date: "",
    time: "",
    payment_method: "", 
    card_number: "",
    card_name: "",
    expiry_date: "",
    cvv: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/reservations", formData)
      .then((response) => {
        setMessage(" Réservation effectuée avec succès !");
      })
      .catch((error) => {
        console.error(error);
        setMessage(" Erreur lors de la réservation.");
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Réserver un local</h2>
      {message && <div className="alert alert-info">{message}</div>}

      {isLoggedIn ? (
        <>
          <p>
            Bienvenue <strong>{userName}</strong>, vous pouvez réserver 👇
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="room_type"
              className="form-control mb-3"
              value={formData.room_type}
              onChange={handleChange}
              required
            >
              <option value="">-- Choisissez une salle --</option>
              <option value="Salle Réunion">Salle Réunion</option>
              <option value="Salle Conférence">Salle Conférence</option>
              <option value="Bureau Privé">Bureau Privé</option>
            </select>
            <input
              type="date"
              name="date"
              className="form-control mb-3"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              className="form-control mb-3"
              value={formData.time}
              onChange={handleChange}
              required
            />

           
            <select
              name="payment_method"
              className="form-control mb-3"
              value={formData.payment_method}
              onChange={handleChange}
              required
            >
              <option value="">-- Choisissez un mode de paiement --</option>
              <option value="physique">Paiement Physique</option>
              <option value="en_ligne">Paiement en Ligne</option>
            </select>

          
            {formData.payment_method === "en_ligne" && (
              <div className="border p-3 mb-3 rounded">
                <h5>Paiement en Ligne 💳</h5>
                <input
                  type="text"
                  name="card_name"
                  className="form-control mb-2"
                  placeholder="Nom sur la carte"
                  value={formData.card_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="card_number"
                  className="form-control mb-2"
                  placeholder="Numéro de carte"
                  value={formData.card_number}
                  onChange={handleChange}
                  required
                />
                <input
                  type="month"
                  name="expiry_date"
                  className="form-control mb-2"
                  value={formData.expiry_date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  className="form-control mb-2"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <button type="submit" className="btn btn-success w-100">
              Réserver
            </button>
          </form>
        </>
      ) : (
        <div className="alert alert-warning">
           Veuillez vous connecter pour accéder à la réservation.
        </div>
      )}

      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-secondary">
          Retour
        </Link>
      </div>
    </div>
  );
}

export default ReservationForm;
