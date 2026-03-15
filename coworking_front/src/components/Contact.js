import { Link } from "react-router-dom";
import React from "react";

const Contact = ({ isLoggedIn, userName, onLogout }) => {
  return (
    <>
      <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0">
                  <Link to="/" className="text-white h2 mb-0">
                    <strong>
                      CWL<span className="text-primary">.</span>
                    </strong>
                  </Link>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav className="site-navigation text-right text-md-right">
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <a
                      href="#"
                      className="site-menu-toggle js-menu-toggle text-white"
                    >
                      <span className="icon-menu h3"></span>
                    </a>
                  </div>

                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li>
                      <Link to="/">Accueil</Link>
                    </li>
                    <li>
                      <Link to="/AboutPage">A Propos</Link>
                    </li>
                    <li>
                      <Link to="/Appartement">Nos Locaux</Link>
                    </li>
                    <li className="active">
                      <Link to="/ContactForm">Contact</Link>
                    </li>

                    {/* Partie utilisateur dynamique */}
                    {isLoggedIn ? (
                      <>
                        <li>
                          <span className="text-white">Bienvenue {userName}</span>
                        </li>
                        <li>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={onLogout}
                          >
                            Déconnexion
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/LoginPage">Login</Link>
                        </li>
                        <li>
                          <Link to="/RegisterPage">Register</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      {/* Hero Section */}
      <div
        className="site-blocks-cover overlay bottom"
        style={{ backgroundImage: "url('images/pexels-yankrukov-8866743.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="mb-4">Contactez-nous</h1>
              <p className="mb-5">
                Vous souhaitez en savoir plus sur nos espaces de coworking ou
                réserver une visite ? Notre équipe est disponible pour répondre
                à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire et infos de contact */}
      <div className="site-section border-bottom">
        <div className="container">
          <div className="row">
            {/* Formulaire de contact */}
            <div className="col-md-12 col-lg-7 mb-5">
              <form action="#" className="contact-form">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Entrez votre nom complet"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Entrez votre adresse e-mail"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="subject">
                      Objet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Objet de votre message"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Écrivez votre message ici..."
                    ></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Envoyer le message"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Infos de contact */}
            <div className="col-lg-4 ml-auto">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Informations de contact</h3>
                <p className="mb-0 font-weight-bold text-black">Adresse</p>
                <p className="mb-4 text-black">
                  123 Avenue du Coworking, Casablanca, Maroc
                </p>

                <p className="mb-0 font-weight-bold text-black">Téléphone</p>
                <p className="mb-4">
                  <a href="tel:+212600000000">+212 6 00 00 00 00</a>
                </p>

                <p className="mb-0 font-weight-bold text-black">Adresse e-mail</p>
                <p className="mb-0">
                  <a href="mailto:contact@coworking.com">contact@coworking.com</a>
                </p>
              </div>

              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Pourquoi nous choisir ?</h3>
                <p className="text-black">
                  Rejoignez notre communauté dynamique de freelances, startups et
                  entreprises. Des espaces modernes, flexibles et inspirants pour
                  travailler, collaborer et innover.
                </p>
                <p>
                  <a href="/AboutPage" className="btn btn-primary py-2 px-4">
                    En savoir plus
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
