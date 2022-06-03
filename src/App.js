import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/NavBar/Intro/Intro";
import Services from "./Components/NavBar/Services/Services";
import Experience from "./Components/NavBar/Experience/Experience";
import Portfolio from "./Components/NavBar/Portfolio/Portfolio";
import Contact from "./Components/NavBar/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
