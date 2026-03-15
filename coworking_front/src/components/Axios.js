import React, { useEffect, useState } from "react";
import AxiosCard from "./AxiosCard";
import axios from "axios";

const Axios = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // États pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Charger les données au montage
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    axios
      .get("http://127.0.0.1:8000/api/articles")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Gérer la saisie du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoyer une nouvelle entrée à Laravel
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/articles", formData)
      .then((response) => {
        setArticles([...articles, response.data]); // Ajouter à la liste affichée
        setFormData({ name: "", email: "", subject: "", message: "" }); // Réinitialiser le formulaire
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de l'envoi !");
      });
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📩 Gestion des Articles</h1>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Envoyer</button>
      </form>

      {/* Liste dynamique */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((article) => (
          <AxiosCard key={article.id} contact={article} />
        ))}
      </div>
    </div>
  );
};

export default Axios;
