import { Link } from "react-router-dom";
import React from "react";
const Atlanta=({ isLoggedIn, userName, onLogout })=>{
    return(
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
                    <li className="active">
                      <Link to="/">Accueil</Link>
                    </li>
                    <li>
                      <Link to="/AboutPage">A Propos</Link>
                    </li>
                    <li>
                      <Link to="/Appartement">Nos Locaux</Link>
                    </li>
                    <li>
                      <Link to="/ContactForm">Contact</Link>
                    </li>

                    {/* Partie utilisateur dynamique */}
                    {isLoggedIn ? (
                      <>
                        <li>
                          <span className="text-white">Bienvenue {userName}</span>
                        </li>
                        <li>
                          <button className="btn btn-danger btn-sm" onClick={onLogout}>
                            Déconnexion
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/LoginPage">Se connecter</Link>
                        </li>
                        <li>
                          <Link to="/RegisterPage">S'inscrire</Link>
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
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url('images/image_2.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="mb-4">Détails-COWORKING</h1>
              
            </div>
          </div>
        </div>
      </div>
         <div className="container">
  <div className="featured-property-half d-flex">
    <div
      className="image"
      style={{ backgroundImage: "url('images/copernico-yfmU1uL_mp8-unsplash.jpg')" }}
    ></div>
   <div className="text">
<h2>Atlanta Studio</h2>
<p className="mb-5">
  Nos bureaux privés offrent un espace calme et sécurisé pour travailler en toute concentration. Ils incluent également une zone de détente pour favoriser la créativité et la productivité, idéale pour les freelances, petites équipes ou projets individuels.
</p>
<ul className="property-list-details mb-5">
  <li className="text-black">
    Lieux : <strong className="text-black">Bureau privé modulable avec zone de détente et coin relaxation</strong>
  </li>
  <li>
    Capacité : <strong>1 à 4 personnes</strong>
  </li>
  <li>
    Services inclus : <strong>Wi-Fi haut débit, imprimante/scanner, climatisation, mobilier ergonomique, accès à la cuisine et café/thé à volonté</strong>
  </li>
  <li>
    Tarifs : <strong>2 000 DH / mois, 700 DH / semaine, 250 DH / jour</strong>
  </li>
  <li>
    Avantages : <strong>Accès aux salles collaboratives, événements networking, ateliers et conférences gratuits</strong>
  </li>
  <li>
    Ouverture : <strong>7j/7, 8h – 22h, badge d’accès sécurisé</strong>
  </li>
</ul>
<p>
  <a href="/ReservationForm" className="btn btn-primary px-4 py-3">
    Réserver cet espace
  </a>
</p>
</div>
</div>
</div>
        </>
    )
}
export default Atlanta;