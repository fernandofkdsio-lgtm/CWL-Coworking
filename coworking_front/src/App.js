import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutPage from "./components/PageAbout";
import Appartment from "./components/Appartement";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import ReservationForm from "./components/ReservationForm";
import Contact from "./components/Contact"; 
import Opennash from "./components/Open";
import Baltimore from "./components/Baltimore";
import Austin from "./components/Austin";
import Atlanta from "./components/Atlanta";
import Baltiforum from "./components/Baltimoreforum";
import Austinmeeting from "./components/Austinmeeting";
import Atlantaconf from "./components/Atlantaconférence";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserName(`${user.first_name} ${user.last_name}`);
    }
  }, []);

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <Router>
     
      

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
               isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}/>
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/AboutPage"
          element={
            <>
              <AboutPage 
               isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
              />
              <Footer />
              
            </>
          }
        />
        <Route
          path="/Appartement"
          element={
            <>
              <Appartment
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout} />
              <Footer />
            </>
          }
        />
        <Route
          path="/ContactForm"
          element={
            <>
            <Contact
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
        />
        <Route
          path="/Opennash"
          element={
            <>
            <Opennash
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
        />
         <Route
          path="/Baltimore"
          element={
            <>
            <Baltimore
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
          
        />
         <Route
          path="/Austin"
          element={
            <>
            <Austin
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
          
        />
        <Route
          path="/Atlanta"
          element={
            <>
            <Atlanta
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
          
        />
        <Route
          path="/Baltiforum"
          element={
            <>
            <Baltiforum
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
          
        />
         <Route
          path="/Austinmeeting"
          element={
            <>
            <Austinmeeting
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
          
        />
        <Route
          path="/Atlantaconf"
          element={
            <>
            <Atlantaconf
              isLoggedIn={isLoggedIn}
              userName={userName}
              onLogout={handleLogout}
            />
            <Footer/>
            </>
            
          }
          
        />
        <Route
          path="/ReservationForm"
          element={
            <ReservationForm
              isLoggedIn={isLoggedIn}
              userName={userName}
            />
          }
        />
        <Route
          path="/LoginPage"
          element={
            <LoginPage 
              setIsLoggedIn={setIsLoggedIn} 
              setUserName={setUserName} 
            />
          }
        />
        <Route
          path="/RegisterPage"
          element={
            <RegisterPage 
              setIsLoggedIn={setIsLoggedIn} 
              setUserName={setUserName} 
            />
          }
        />
      </Routes>

    </Router>
  );
}

export default App;
