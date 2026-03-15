import React, { useState } from "react";
import axios from "axios";
import styles from "./AxiosCardStyles";

const AxiosCard = ({ contact, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: contact.name,
    email: contact.email,
    subject: contact.subject,
    message: contact.message,
  });

  // Gérer la saisie du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Supprimer un article
  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/articles/${contact.id}`)
      .then(() => {
        onDelete(contact.id); // mettre à jour la liste côté parent (Axios.jsx)
      })
      .catch((err) => console.error("Erreur suppression :", err));
  };

  // Mettre à jour un article
  const handleUpdate = () => {
    axios
      .put(`http://127.0.0.1:8000/api/articles/${contact.id}`, formData)
      .then((res) => {
        onUpdate(res.data); // renvoyer les nouvelles données au parent
        setIsEditing(false);
      })
      .catch((err) => console.error("Erreur modification :", err));
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>💾 Sauvegarder</button>
          <button onClick={() => setIsEditing(false)}>❌ Annuler</button>
        </>
      ) : (
        <>
          <h2 style={styles.nom}>{contact.name}</h2>
          <p style={styles.email}>{contact.email}</p>
          <p style={styles.sujet}>{contact.subject}</p>
          <p style={styles.message}>{contact.message}</p>
          <button onClick={() => setIsEditing(true)}>✏️ Modifier</button>
          <button onClick={handleDelete}>🗑 Supprimer</button>
        </>
      )}
    </div>
  );
};

export default AxiosCard;
