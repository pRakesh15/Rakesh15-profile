import "./App.css";
import BackCanvas from "./components/activity/StarCanvas";
import Contact from "./components/main/Contact";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Projects";
import Skils from "./components/main/Skils";
import Footer from "./components/subComponent/Footer";

function App() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col  gap-20">
          <Navbar />
          <Hero />
          <div className="relative z-0">
          <Skils/>
          <BackCanvas/>
          </div>
          <Projects/>
          <div className="relative z-0">
          <Contact/>
          <BackCanvas/>
          </div>
          <Footer/>
          
        </div>
      </main>
    </>
  );
}

export default App;
