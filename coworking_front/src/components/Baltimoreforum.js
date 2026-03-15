import { Link } from "react-router-dom";
import React from "react";
const  Baltiforum=({ isLoggedIn, userName, onLogout })=>{
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

  
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

    
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url('images/pexels-fauxels-3184306.jpg')" }}
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
      style={{ backgroundImage: "url('images/pexels-rebrand-cities-581004-1367276.jpg')" }}
    ></div>
   <div className="text">
<h2>Baltimore Forum</h2>
<p className="mb-5">
  Notre salle forum est conçue pour accueillir des présentations, ateliers et discussions de groupe. L’espace favorise les échanges et la collaboration, tout en offrant un environnement confortable et modulable selon vos besoins.
</p>
<ul className="property-list-details mb-5">
  <li className="text-black">
    Lieux : <strong className="text-black">Salle forum avec disposition modulable, projecteur et équipement audio-visuel</strong>
  </li>
  <li>
    Capacité : <strong>10 à 30 personnes</strong>
  </li>
  <li>
    Services inclus : <strong>Wi-Fi haut débit, projecteur, tableau blanc,équipé multimédia, sonorisation, climatisation, accès à la cuisine et café/thé à volonté</strong>
  </li>
  <li>
    Tarifs : <strong>1 500 DH / demi-journée, 2 500 DH / journée complète</strong>
  </li>
  <li>
    Avantages : <strong>Possibilité d’animations, ateliers et événements networking</strong>
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
export default Baltiforum;