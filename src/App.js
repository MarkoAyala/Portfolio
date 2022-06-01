import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/NavBar/Intro/Intro";
import Services from "./Components/NavBar/Services/Services";
import Experience from "./Components/NavBar/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
