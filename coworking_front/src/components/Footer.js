import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Section Réseaux sociaux */}
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
            {/* À propos & Newsletter */}
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">À propos de nous</h3>
                <p>
                  Notre espace de coworking offre un environnement moderne, convivial et flexible,
                  conçu pour les freelances, startups et entreprises qui souhaitent collaborer,
                  innover et grandir ensemble.
                </p>
              </div>
              <div className="mb-5">
               
              </div>
            </div>

            {/* Navigation & Réseaux */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigation</h3>
                </div>
                <div className="col-md-6 col-lg-6">
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
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Devenir membre</a></li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  
                </div>
              </div>
            </div>

            {/* Vidéo de présentation */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Découvrez notre espace</h3>
                <div className="block-16">
                  <figure>
                    <img src="images/img_1.jpg" alt="Espace coworking" className="img-fluid rounded" />
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="play-button popup-vimeo"
                    >
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
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
