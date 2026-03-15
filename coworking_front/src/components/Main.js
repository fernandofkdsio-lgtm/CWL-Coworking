import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
   <div className="container">
  <div className="featured-property-half d-flex">
    <div
      className="image"
      style={{ backgroundImage: "url('images/pexels-kindelmedia-7688174.jpg')" }}
    ></div>
    <div className="text">
      <h2>À propos de nous</h2>
      <p className="mb-5">
        Notre plateforme offre des espaces de coworking modernes et conviviaux, pensés pour les freelancers, startups et équipes créatives. Nous combinons confort, productivité et esprit communautaire pour que chacun puisse travailler et collaborer dans un environnement inspirant.
      </p>
      <ul className="property-list-details mb-5">
        <li className="text-black">
          Lieux : <strong className="text-black">Bureaux et salles modulables</strong>
        </li>
        <li>
          Capacité : <strong>Petites et grandes équipes</strong>
        </li>
        <li>
          Services : <strong>Wi-Fi haut débit, lounges, cuisines partagées</strong>
        </li>
        <li>
          Communauté : <strong>Événements réguliers & networking</strong>
        </li>
        <li>
          Ouverture : <strong>7j/7</strong>
        </li>
      </ul>
      <p>
        <a href="/AboutPage" className="btn btn-primary px-4 py-3">
          En savoir plus
        </a>
      </p>
    </div>
  </div>
</div>


{/* Browse Offices Section */}
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
        <Link to="/Appartement" className="btn btn-primary">
          Voir Tous Nos Bureaux
        </Link>
      </div>
    </div>
  </div>
</div>

     {/* Meeting Rooms & Forums Section */}
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

    {/* Break Rooms & Recreational Spaces Section */}
<div className="site-section bg-light">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Nos Salles de Détente & Espaces Ludiques</h2>
        <p>
          Profitez de nos espaces conçus pour décompresser, se divertir et renforcer les liens entre coworkers. Ces zones combinent confort, jeux interactifs et ambiance conviviale pour un équilibre parfait entre travail et relaxation.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <a href="#">
          <img src="images/pexels-yankrukov-9002991.jpg" alt="Salle de détente" className="img-fluid" />
        </a>
        <div className="p-4 bg-white">
         
          <h2 className="h5 text-black mb-3">
            <a href="#">Salle de jeux & détente</a>
          </h2>
          <p>
            Espace équipé de jeux interactifs et coins lounge pour se relaxer entre deux sessions de travail.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <a href="#">
          <img src="images/pexels-heyho-7750093.jpg" alt="Forum de détente" className="img-fluid" />
        </a>
        <div className="p-4 bg-white">
         
          <h2 className="h5 text-black mb-3">
            <a href="#">Forum collaboratif</a>
          </h2>
          <p>
            Zone de rencontre et d’échange pour brainstormings, jeux de rôle ou discussions informelles.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <a href="#">
          <img src="images/pexels-helenalopes-3700252.jpg" alt="Zone de loisirs" className="img-fluid" />
        </a>
        <div className="p-4 bg-white">
        
          <h2 className="h5 text-black mb-3">
            <a href="#">Coin Café & Snacks</a>
          </h2>
          <p>
            Prenez une pause gourmande dans notre coin café avec boissons et snacks, idéal pour se ressourcer ou échanger avec d’autres coworkers.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

     {/* Testimonials Section */}
<div className="site-section block-13">
  <div className="container">
    <div className="row">
      <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
        <h2 className="mb-5">Ils Parlent de Nous</h2>
        <p>
          Découvrez ce que nos membres disent de leur expérience dans nos
          espaces de coworking : une communauté, un confort et une
          productivité au quotidien.
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
            “Un lieu idéal pour travailler et rencontrer d’autres
            professionnels. J’ai trouvé une vraie communauté qui m’aide à
            avancer dans mes projets.”
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
            “Les espaces sont modernes, lumineux et super bien équipés.
            C’est beaucoup plus motivant que de travailler seul à la
            maison.”
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
            “Grâce au coworking, j’ai pu élargir mon réseau et collaborer
            avec d’autres entrepreneurs. Une ambiance inspirante et
            productive.”
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Main;
