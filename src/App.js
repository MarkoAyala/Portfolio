import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/NavBar/Intro/Intro";
import Services from "./Components/NavBar/Services/Services";
import Experience from "./Components/NavBar/Experience/Experience";
import Portfolio from "./Components/NavBar/Portfolio/Portfolio";
import Contact from "./Components/NavBar/Contact/Contact";
import Footer from "./Components/NavBar/Footer/Footer";
import {themeContext} from './Context.js';
import { useContext } from "react";

function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode?'black':'',
      color:darkMode?'white': '',
    }}
    >
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
