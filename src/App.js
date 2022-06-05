import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/NavBar/Intro/Intro";
import Services from "./Components/NavBar/Services/Services";
import Experience from "./Components/NavBar/Experience/Experience";
import Portfolio from "./Components/NavBar/Portfolio/Portfolio";
import Contact from "./Components/NavBar/Contact/Contact";
import Footer from "./Components/NavBar/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
