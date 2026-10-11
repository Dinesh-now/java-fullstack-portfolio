import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Project";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Contact/>

    <h1>My PortFolio</h1>
    </>
  )
}
export default App;