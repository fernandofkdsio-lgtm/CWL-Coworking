import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn, setUserName }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/login", formData);
    
    // Stocke l'utilisateur complet dans le localStorage
    localStorage.setItem("user", JSON.stringify(res.data.user));
    
    setIsLoggedIn(true);
    setUserName(res.data.user.first_name + " " + res.data.user.last_name);
    navigate("/");
  } catch (err) {
    setError(err.response?.data?.message || "Erreur de connexion");
  }
};

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Connexion</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100 mb-2">
          Se connecter
        </button>
      </form>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-secondary">Accueil</Link>
        <Link to="/RegisterPage" className="btn btn-link">S’inscrire</Link>
      </div>
    </div>
  );
};

export default LoginPage;
