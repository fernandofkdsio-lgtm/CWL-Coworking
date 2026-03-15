import React from "react";
import { Link } from "react-router-dom";

const Appartment=({ isLoggedIn, userName, onLogout })=>{
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
                    <li>
                      <Link to="/">Accueil</Link>
                    </li>
                    <li>
                      <Link to="/AboutPage">A Propos</Link>
                    </li>
                    <li className="active">
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

    <div className="site-blocks-cover inner-page-cover overlay"  style={{ backgroundImage: "url('images/image_5.jpg')" }}>
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 text-center">
          <h1 className="text-white">Nos Locaux</h1>
          <p>Bienvenu sur l'excluvité de nos locaux.</p>
        </div>
      </div>
    </div>
  </div>

<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Découvrez Nos Bureaux</h2>
        <p>
          Explorez nos espaces de coworking modernes et fonctionnels, pensés pour offrir confort, productivité et collaboration. Chaque bureau est équipé pour accueillir des freelances, des startups et des équipes de toutes tailles.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-3">
        <Link to="/Opennash" className="unit-9">
          <div
            className="image"
            style={{ backgroundImage: "url('images/copernico--8DAN9_oi8g-unsplash.jpg')" }}
          ></div>
          <div className="unit-9-content">
            <h2>Open Space Nashville</h2>
            <span>Espaces modulables pour 2 à 4 personnes</span>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-3">
        <Link to="/Baltimore" className="unit-9">
          <div
            className="image"
            style={{ backgroundImage: "url('images/pexels-pixabay-356056.jpg')" }}
          ></div>
          <div className="unit-9-content">
            <h2>Baltimore Hub</h2>
            <span>Bureaux privées</span>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-3">
        <Link to="/Austin" className="unit-9">
          <div
            className="image"
            style={{ backgroundImage: "url('images/pexels-kindelmedia-7688173.jpg')" }}
          ></div>
          <div className="unit-9-content">
            <h2>Austin Workspace</h2>
            <span>Espaces collaboratifs pour brainstorming et ateliers</span>
          </div>
        </Link>
      </div>

      <div className="col-md-6 col-lg-3">
        <Link to="/atlanta" className="unit-9">
          <div
            className="image"
            style={{ backgroundImage: "url('images/copernico-yfmU1uL_mp8-unsplash.jpg')" }}
          ></div>
          <div className="unit-9-content">
            <h2>Atlanta Studio</h2>
            <span>Salles privées et zones de détente pour productivité optimale</span>
          </div>
        </Link>
      </div>

      <div className="col-md-12 text-center mt-5">
       
      </div>
    

      
      <div className="col-md-6 col-lg-3 mb-5">
        <a href="apartment-detail.html" className="unit-9">
          <div className="image" style={{ backgroundImage: "url('images/pexels-nicolas-rueda-175965148-26966416.jpg')" }}></div>
          <div className="unit-9-content">
            <h2>Nashville</h2>
            <span>Bureaux calmes pour travail individuel</span>
            <span>Accès aux salles de réunion sur réservation</span>
          </div>
        </a>
      </div>

      <div className="col-md-6 col-lg-3 mb-5">
        <a href="apartment-detail.html" className="unit-9">
          <div className="image" style={{ backgroundImage: "url('images/pexels-proxyclick-2451566.jpg')" }}></div>
          <div className="unit-9-content">
            <h2>Baltimore</h2>
            <span>Bureaux collaboratifs</span>
            <span>Mobilier flexible et environnement lumineux</span>
          </div>
        </a>
      </div>

      <div className="col-md-6 col-lg-3 mb-5">
        <a href="apartment-detail.html" className="unit-9">
          <div className="image" style={{ backgroundImage: "url('images/pexels-thisisengineering-3861458.jpg')" }}></div>
          <div className="unit-9-content">
            <h2>Austin</h2>
            <span>Bureaux pour équipes dynamiques</span>
            <span>Zones de brainstorming et networking</span>
          </div>
        </a>
      </div>

      <div className="col-md-6 col-lg-3 mb-5">
        <a href="apartment-detail.html" className="unit-9">
          <div className="image" style={{ backgroundImage: "url('images/pexels-coworkingspace-replus-105195823-9497772.jpg')" }}></div>
          <div className="unit-9-content">
            <h2>Atlanta</h2>
            <span>Bureaux premium équipés</span>
            <span>Services et infrastructures inclus</span>
          </div>
        </a>
      </div>

    </div>
  </div>
</div>


<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Nos Salles de Réunion & Forums</h2>
        <p>
          Découvrez nos espaces modulables pour vos réunions, ateliers et conférences. Chaque salle est équipée pour favoriser la collaboration, la productivité et le confort de vos équipes.
        </p>
      </div>
    </div>

    <div className="site-block-retro d-block d-md-flex">
      <Link to="/Baltiforum" className="col1 unit-9 no-height">
        <div
          className="image"
          style={{ backgroundImage: "url('images/pexels-rebrand-cities-581004-1367276.jpg')" }}
        ></div>
        <div className="unit-9-content">
          <h2>Baltimore Forum</h2>
          <span>Capacité 20 personnes, équipé multimédia</span>
        </div>
      </Link>

      <div className="col2 ml-auto">
        <Link to="/Austinmeeting" className="col2-row1 unit-9 no-height">
          <div
            className="image"
            style={{ backgroundImage: "url('images/pexels-elevate-digital-784230-1647919.jpg')" }}
          ></div>
          <div className="unit-9-content">
            <h2>Austin Meeting Room</h2>
            <span>Capacité 10 personnes, tables modulables</span>
          </div>
        </Link>

        <Link to="/Atlantaconf" className="col2-row2 unit-9 no-height">
          <div
            className="image"
            style={{ backgroundImage: "url('images/pexels-divinetechygirl-1181304.jpg')" }}
          ></div>
          <div className="unit-9-content">
            <h2>Atlanta Conference</h2>
            <span>Capacité 50 personnes, son et projection inclus</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>


<div className="site-section bg-light">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Nos Salles de Détente</h2>
        <p>
          Après une journée de travail, nos espaces de détente permettent de se relaxer et de se divertir. Profitez de zones lounge confortables, de jeux et d’un environnement convivial pour rencontrer d’autres coworkers.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <a href="single.html">
          <img src="images/img_4.jpg" alt="Salle de détente" className="img-fluid" />
        </a>
        <div className="p-4 bg-white">
          <h2 className="h5 text-black mb-3">
            <a href="single.html">Lounge Relaxation</a>
          </h2>
          <p>
            Espace convivial avec canapés et ambiance détendue pour se relaxer entre deux sessions de travail.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <a href="single.html">
          <img src="images/img_2.jpg" alt="Salle de jeux" className="img-fluid" />
        </a>
        <div className="p-4 bg-white">
          <h2 className="h5 text-black mb-3">
            <a href="single.html">Salle de Jeux</a>
          </h2>
          <p>
            Profitez de tables de ping-pong, baby-foot et autres jeux pour vous détendre et créer des moments de convivialité.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <a href="single.html">
          <img src="images/img_3.jpg" alt="Coin café" className="img-fluid" />
        </a>
        <div className="p-4 bg-white">
          <h2 className="h5 text-black mb-3">
            <a href="single.html">Coin Café & Snacks</a>
          </h2>
          <p>
            Prenez une pause gourmande dans notre coin café avec boissons et snacks, idéal pour se ressourcer ou échanger avec d’autres coworkers.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    
<div className="site-section block-13">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Apprécié par nos coworkers</h2>
        <p>
          Nos membres partagent leur expérience dans nos espaces de coworking modernes et conviviaux. Découvrez pourquoi ils adorent travailler et se connecter ici.
        </p>
      </div>
    </div>

    <div
      className="nonloop-block-13"
      style={{ display: "flex", gap: "20px", justifyContent: "center" }}
    >
      <div className="text-center p-3 p-md-5 bg-white">
        <div className="mb-4">
          <img
            src="images/person_1.jpg"
            alt="Image"
            className="w-50 mx-auto img-fluid rounded-circle"
          />
        </div>
        <div className="text-black">
          <h3 className="font-weight-light h5">Megan Smith</h3>
          <p className="font-italic">
            “Les espaces sont incroyablement bien pensés, lumineux et inspirants. J’ai pu développer mes projets et rencontrer des talents incroyables.”
          </p>
        </div>
      </div>

      <div className="text-center p-3 p-md-5 bg-white">
        <div className="mb-4">
          <img
            src="images/person_2.jpg"
            alt="Image"
            className="w-50 mx-auto img-fluid rounded-circle"
          />
        </div>
        <div className="text-black">
          <h3 className="font-weight-light h5">Brooke Cagle</h3>
          <p className="font-italic">
            “L’ambiance est super conviviale et les événements communautaires m’ont permis de créer des collaborations précieuses et d’échanger avec d’autres professionnels.”
          </p>
        </div>
      </div>

      <div className="text-center p-3 p-md-5 bg-white">
        <div className="mb-4">
          <img
            src="images/person_3.jpg"
            alt="Image"
            className="w-50 mx-auto img-fluid rounded-circle"
          />
        </div>
        <div className="text-black">
          <h3 className="font-weight-light h5">Philip Martin</h3>
          <p className="font-italic">
            “Les bureaux sont modernes, bien équipés et parfaitement adaptés au travail collaboratif. Je me sens productif et entouré de personnes inspirantes.”
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className="bg-primary">
        <div className="container">
          <div className="row">
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-facebook text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-twitter text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-instagram text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-linkedin text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-pinterest text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-youtube text-white"></span>
            </a>
          </div>
        </div>
      </div>

       <footer className="site-footer">
      <div className="container">
        <div className="row">
         
          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">About Apart</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!
              </p>
            </div>
            <div className="mb-5">
              <h3 className="footer-heading mb-4">Subscribe</h3>
              <form className="site-block-subscribe">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-secondary bg-transparent"
                    placeholder="Enter your email"
                    aria-label="Enter Email"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary rounded-top-right-0" type="button" id="button-addon2">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

         
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Apartments</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Featured Apartment</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Membership</a></li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Follow Us</h3>
                <div>
                  <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                  <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                  <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                  <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">Watch Live Streaming</h3>
              <div className="block-16">
                <figure>
                  <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                  <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo">
                    <span className="icon-play"></span>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}
export default Appartment;