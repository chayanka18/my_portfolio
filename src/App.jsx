import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { SocialLinks } from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
