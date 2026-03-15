import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      // Affiche le message renvoyé par le backend
      setSuccess(res.data.message);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });

      // Redirection après inscription (optionnel)
      setTimeout(() => navigate("/LoginPage"), 2000);

    } catch (err) {
      // Validation Laravel
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: err.response?.data?.message || "Erreur lors de l'inscription" });
      }
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Inscription</h2>

      {success && <div className="alert alert-success">{success}</div>}
      {errors.general && <div className="alert alert-danger">{errors.general}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              name="first_name"
              className="form-control"
              placeholder="Prénom"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            {errors.first_name && <small className="text-danger">{errors.first_name[0]}</small>}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Nom"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            {errors.last_name && <small className="text-danger">{errors.last_name[0]}</small>}
          </div>
        </div>

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <small className="text-danger">{errors.email[0]}</small>}

        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <small className="text-danger">{errors.password[0]}</small>}

        <input
          type="password"
          name="password_confirmation"
          className="form-control mb-3"
          placeholder="Confirmer le mot de passe"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary w-100 mb-2">S’inscrire</button>
      </form>

      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-secondary">Accueil</Link>
        <Link to="/LoginPage" className="btn btn-link">Se connecter</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
