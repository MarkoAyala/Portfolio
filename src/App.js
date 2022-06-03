import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/NavBar/Intro/Intro";
import Services from "./Components/NavBar/Services/Services";
import Experience from "./Components/NavBar/Experience/Experience";
import Portfolio from "./Components/NavBar/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
    </div>
  );
}

export default App;
