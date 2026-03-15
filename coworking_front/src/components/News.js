import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";

function NewsDashboard() {
  const [user, setUser] = useState(null); // utilisateur connecté
  const [showAuth, setShowAuth] = useState(false); // afficher login/register
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const API_URL = "http://localhost:8000/api/news"; // ton backend Laravel

  // Charger les messages
  const loadMessages = async () => {
    try {
      const res = await axios.get(`${API_URL}/news`);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Poster un message
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setShowAuth(true);
      return;
    }

    try {
      await axios.post(`${API_URL}/news`, formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setFormData({ name: "", email: "", message: "" });
      loadMessages();
    } catch (err) {
      console.error(err);
    }
  };

  // Supprimer un message
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/news/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      loadMessages();
    } catch (err) {
      console.error(err);
    }
  };

  // Modifier un message
  const handleUpdate = async (id, newMessage) => {
    try {
      await axios.put(`${API_URL}/news/${id}`, { message: newMessage }, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      loadMessages();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="site-section bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Tableau de conversation</h2>

        <form className="contact-form mb-5" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="4"
              placeholder="Écrivez votre message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>

        {!user && showAuth && (
          <div className="d-flex justify-content-around mb-5">
            <Login setUser={setUser} setShowAuth={setShowAuth} />
            <Register setUser={setUser} setShowAuth={setShowAuth} />
          </div>
        )}

        {/* Affichage des messages */}
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className="card mb-3 p-3">
              <strong>{msg.name}</strong> ({msg.email}) <br />
              <p>{msg.message}</p>
              {user && user.id === msg.user_id && (
                <div>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => {
                      const newMessage = prompt("Modifier votre message", msg.message);
                      if (newMessage) handleUpdate(msg.id, newMessage);
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsDashboard;
