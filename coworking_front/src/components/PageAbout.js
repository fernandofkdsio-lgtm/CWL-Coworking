import React from "react";
import { Link } from "react-router-dom";

const AboutPage = ({ isLoggedIn, userName, onLogout }) => {
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
                    <li className="active">
                      <Link to="/AboutPage">A Propos</Link>
                    </li>
                    <li >
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

    <div className="site-blocks-cover inner-page-cover overlay" style={{backgroundImage: "url('images/pexels-kindelmedia-7688174.jpg')"}}>
    <div className="container">
<div className="row align-items-center justify-content-center">
        <div className="col-md-7 text-center" >
          <h1 className="text-white">A propos de Nous</h1>
         
        </div>
      </div>




    </div>
  </div>

{/* Bloc About : À propos */}
<div className="site-section about-section" style={{ width: "100%", background: "#fff", padding: "60px 0" }}>
  <div 
    className="container-fluid" 
    style={{ display: "flex", alignItems: "center", gap: "20px", padding: "0 40px" }}
  >
    
    {/* Image gauche */}
    <div className="about-image" style={{ flex: 1 }}>
      <img 
        src="images/pexels-kindelmedia-7688173.jpg" 
        alt="Coliving Space" 
        className="img-fluid" 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover", 
          borderRadius: "8px", 
          filter: "brightness(0.9)" 
        }}
      />
    </div>

    {/* Texte droite */}
    <div className="about-content" style={{ flex: 1, padding: "20px" }}>
      <h2 className="mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem", color: "#2c7a7b" }}>À Propos de Nous</h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "15px" }}>
        Nous créons des espaces de <strong>coliving et coworking modernes</strong>, pensés pour 
        favoriser la collaboration, la productivité et une véritable communauté. 
        Nos résidences combinent confort, design et convivialité.
      </p>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
        Que vous soyez étudiant, entrepreneur ou professionnel en déplacement, 
        nous vous offrons un cadre où <span style={{ color: "#e67e22", fontWeight: "bold" }}>vivre et travailler</span> s’harmonisent.
      </p>
    </div>

  </div>
</div>

{/* Bloc About : Notre Mission */}
<div className="site-section about-section" style={{ width: "100%", background: "#f9f9f9", padding: "60px 0" }}>
  <div 
    className="container-fluid" 
    style={{ display: "flex", alignItems: "center", gap: "20px", flexDirection: "row-reverse", padding: "0 40px" }}
  >
    
    {/* Image droite */}
    <div className="about-image" style={{ flex: 1 }}>
      <img 
        src="images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg" 
        alt="Coworking Space" 
        className="img-fluid" 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover", 
          borderRadius: "8px", 
          filter: "brightness(0.9)" 
        }}
      />
    </div>

    {/* Texte gauche */}
    <div className="about-content" style={{ flex: 1, padding: "20px" }}>
      <h2 className="mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem", color: "#2c7a7b" }}>Notre Mission</h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "20px" }}>
        Offrir des environnements inspirants où chacun peut <strong>travailler, apprendre et vivre</strong> 
        dans une atmosphère stimulante et collaborative.
      </p>

      {/* Avantages avec cochettes */}
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", lineHeight: "1.8" }}>
        <li style={{ marginBottom: "10px" }}>✔️ Espaces de coworking modernes et connectés</li>
        <li style={{ marginBottom: "10px" }}>✔️ Chambres confortables en coliving</li>
        <li style={{ marginBottom: "10px" }}>✔️ Communauté active et dynamique</li>
        <li style={{ marginBottom: "10px" }}>✔️ Événements et networking réguliers</li>
        <li>✔️ Flexibilité adaptée aux étudiants, freelances et entreprises</li>
      </ul>
    </div>

  </div>
</div>




    <div className="site-section">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Notre Équipe</h2>
        <p>
          Derrière notre plateforme de <strong>coliving & coworking</strong>, se trouve une équipe passionnée 
          qui œuvre chaque jour pour créer des espaces modernes, collaboratifs et chaleureux.
        </p>
      </div>
    </div>
    <div className="row">
      
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
        <div className="team-member">
          <img src="images/person_1.jpg" alt="Image" className="img-fluid"/>

          <div className="text">
            <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
            <span className="d-block mb-2 text-white-opacity-05">Co-Fondatrice & Directrice</span>
            <p className="mb-4">
              Experte en design d’intérieur, Megan repense les espaces de vie et de travail 
              pour allier confort, esthétique et fonctionnalité.
            </p>
            <p>
              <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
              <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
              <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
        <div className="team-member">
          <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>

          <div className="text">
            <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
            <span className="d-block mb-2 text-white-opacity-05">Co-Fondatrice & Community Manager</span>
            <p className="mb-4">
              Brooke anime la communauté en organisant des événements, ateliers et networking 
              pour favoriser les échanges entre résidents et coworkers.
            </p>
            <p>
              <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
              <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
              <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
        <div className="team-member">
          <img src="images/person_3.jpg" alt="Image" className="img-fluid"/>

          <div className="text">
            <h2 className="mb-2 font-weight-light h4">Philip Martin</h2>
            <span className="d-block mb-2 text-white-opacity-05">Responsable Technique</span>
            <p className="mb-4">
              Philip supervise la plateforme digitale et les services connectés, 
              garantissant une expérience fluide et innovante pour tous les membres.
            </p>
            <p>
              <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
              <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
              <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
            </p>
          </div>
        </div>
      </div>

    

  
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
  <div className="team-member">

    <img src="images/person_4.jpg" alt="Image" className="img-fluid"/>

    <div className="text">

      <h2 className="mb-2 font-weight-light h4">Steven Ericson</h2>
      <span className="d-block mb-2 text-white-opacity-05">Co Founder & CEO</span>
      <p className="mb-4">Passionné par l’innovation et le coworking, Steven s’assure que notre espace favorise la collaboration et la créativité.</p>
      <p>
        <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
        <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
        <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
      </p>
    </div>

  </div>
</div>

<div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
  <div className="team-member">

    <img src="images/person_1.jpg" alt="Image" className="img-fluid"/>

    <div className="text">

      <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
      <span className="d-block mb-2 text-white-opacity-05">Co Founder & Operations</span>
      <p className="mb-4">Nathan supervise le fonctionnement quotidien de notre espace coworking, garantissant un environnement productif et agréable pour tous.</p>
      <p>
        <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
        <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
        <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
      </p>
    </div>

  </div>
</div>

<div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
  <div className="team-member">

    <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>

    <div className="text">

      <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
      <span className="d-block mb-2 text-white-opacity-05">Co Founder & Community Manager</span>
      <p className="mb-4">Brooke anime notre communauté et organise des événements pour encourager le networking et les collaborations entre membres.</p>
      <p>
        <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
        <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
        <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
      </p>
    </div>

  </div>
</div>
</div>
</div>
</div>

<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-12">

        <h2 className="mb-5">Notre Mot</h2>
        <p style={{ textAlign: "justify", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Notre plateforme de <strong>coliving & coworking</strong> réunit des espaces de vie et de travail flexibles, modernes et communautaires afin d’aider freelances, startups et équipes distribuées à prospérer. 
          Nous créons des environnements inspirants où l’habitat partagé et le travail collaboratif se complètent pour favoriser la productivité, la créativité et le lien social.
        </p>

        <p style={{ textAlign: "justify", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          <strong>Notre mission</strong> : offrir une expérience clé en main alliant confort résidentiel, services professionnels et animation de communauté. Chaque espace est pensé pour simplifier la vie quotidienne, enrichir les interactions et favoriser la réussite personnelle et professionnelle de chacun.
        </p>

        <h2 className="mb-5 mt-5">Nos Objectifs</h2>
        <p style={{ textAlign: "justify", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          <strong>1.</strong> Garantir une expérience fluide de la réservation à l’installation, avec check-in digital et support personnalisé.<br/>
          <strong>2.</strong> Proposer des espaces modulables et bien équipés : bureaux partagés, salles de réunion, phone-booths, lounges et cuisines partagées.<br/>
          <strong>3.</strong> Animer une communauté active grâce à des événements réguliers : ateliers, conférences, sessions de networking et programmes de mentorship.<br/>
          <strong>4.</strong> Maintenir un haut niveau de confort, de sécurité et de support 24/7 pour tous les résidents et coworkers.<br/>
          <strong>5.</strong> Promouvoir la durabilité et l’écoresponsabilité via optimisation énergétique, tri des déchets et partenariats locaux.
        </p>

        <p style={{ textAlign: "justify", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          <strong>Nos valeurs</strong> : hospitalité, collaboration, transparence, inclusion et impact positif sur la communauté locale. Nous croyons que chaque espace doit inspirer, connecter et soutenir ses membres.
        </p>

        <p style={{ textAlign: "justify", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Ensemble, nous construisons des lieux où l’on vit mieux, on travaille mieux, et on avance plus vite — en communauté. Nos espaces sont pensés pour que chaque individu et chaque équipe trouve un cadre optimal pour se développer.
        </p>

      </div>
    </div>
  </div>
</div>







    
    </>
  );
};

export default AboutPage;
