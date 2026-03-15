import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState({ type: "", text: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.error("Erreur chargement :", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.put(
          `http://127.0.0.1:8000/api/contact/${editingId}`,
          form
        );
        setMessages(messages.map((m) => (m.id === editingId ? res.data : m)));
        setFeedback({ type: "success", text: "Message mis à jour ✅" });
      } else {
        const res = await axios.post("http://127.0.0.1:8000/api/contact", form);
        setMessages([...messages, res.data]);
        setFeedback({ type: "success", text: "Message envoyé 🚀" });
      }
      setForm({ firstName: "", lastName: "", email: "", sujet: "", message: "" });
      setEditingId(null);
    } catch (err) {
      setFeedback({
        type: "error",
        text: err.response?.data?.message || "Erreur lors de l'envoi",
      });
    }
  };

  const handleEdit = (msg) => {
    setForm(msg);
    setEditingId(msg.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/contact/${id}`);
      setMessages(messages.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Erreur suppression :", err);
    }
  };

  return (
    <div className="site-wrap">
      {/* Navbar et Hero */}
      <div className="site-navbar mt-4">
        <div className="container py-1">
          <div className="row align-items-center">
            <div className="col-8 col-md-8 col-lg-4">
              <h1 className="mb-0">
                <Link to="/" className="text-white h2 mb-0">
                  <strong>
                    Apart<span className="text-primary">.</span>
                  </strong>
                </Link>
              </h1>
            </div>
            <div className="col-4 col-md-4 col-lg-8">
              <nav className="site-navigation text-right text-md-right">
               <ul className="site-menu js-clone-nav d-none d-lg-block">
                                   <li>
                                     <Link to="/">Home</Link>
                                   </li>
                                   <li>
                                     <Link to="/AboutPage">About</Link>
                                   </li>
                                   <li>
                                     <Link to="/Appartement">Nos Locaux</Link>
                                   </li>
                                  <li>
                                     <Link className="active" to="/ContactForm">Contact</Link>
                                   </li>
                                   <li>
                                     <Link to="/LoginPage">Login</Link>
                                   </li>
                                    <li>
                                     <Link to="/RegisterPage">Register</Link>
                                   </li>
                                 </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url('images/hero_bg_2.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="mb-4">Contactez-nous</h1>
              <p className="mb-5">
                Vous souhaitez en savoir plus sur nos espaces de coworking ou réserver une visite ?  
                Notre équipe est disponible pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire et liste messages */}
      <div className="site-section border-bottom">
        <div className="container">
          <div className="row">

            {/* Formulaire */}
            <div className="col-md-12 col-lg-7 mb-5">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" name="firstName" className="form-control" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="font-weight-bold" htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" name="lastName" className="form-control" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="sujet">Objet</label>
                    <input type="text" id="sujet" name="sujet" className="form-control" value={form.sujet} onChange={handleChange} required />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="form-control" rows="5" value={form.message} onChange={handleChange} required></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary py-3 px-4">
                      {editingId ? "Modifier le message" : "Envoyer le message"}
                    </button>
                  </div>
                </div>
                {feedback.text && <p style={{ color: feedback.type === "success" ? "green" : "red", fontWeight: "bold" }}>{feedback.text}</p>}
              </form>
            </div>

            {/* Infos de contact */}
            <div className="col-lg-4 ml-auto">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Informations de contact</h3>
                <p className="mb-0 font-weight-bold text-black">Adresse</p>
                <p className="mb-4 text-black">123 Avenue du Coworking, Casablanca, Maroc</p>

                <p className="mb-0 font-weight-bold text-black">Téléphone</p>
                <p className="mb-4"><a href="tel:+212600000000">+212 6 00 00 00 00</a></p>

                <p className="mb-0 font-weight-bold text-black">Adresse e-mail</p>
                <p className="mb-0"><a href="mailto:contact@coworking.com">contact@coworking.com</a></p>
              </div>

              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Pourquoi nous choisir ?</h3>
                <p className="text-black">
                  Rejoignez notre communauté dynamique de freelances, startups et entreprises.
                  Des espaces modernes, flexibles et inspirants pour travailler, collaborer et innover.
                </p>
                <p>
                  <Link to="/about" className="btn btn-primary py-2 px-4">En savoir plus</Link>
                </p>
              </div>
            </div>

            {/* Liste des messages */}
            <div className="col-md-12 mt-5">
              <h3 className="h5 mb-3">Messages reçus</h3>
              {messages.length === 0 ? (
                <p>Aucun message trouvé.</p>
              ) : (
                <ul className="list-group">
                  {messages.map((m) => (
                    <li key={m.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{m.firstName} {m.lastName}</strong> ({m.email})
                        <br />
                        <em>{m.sujet}</em> - {m.message}
                      </div>
                      <div>
                        <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(m)}>✏️</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(m.id)}>🗑</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
