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
          <div className="relative z-0">
          <Hero/>
          <BackCanvas points={350} color={"#AF2736"}/>
          </div>
          <div className="relative z-0">
          <Skils/>
          <BackCanvas points={5000} color={"#f272c8"}/>
          </div>
          <Projects/>
          <div className="relative z-0">
          <Contact/>
          <BackCanvas points={5000} color={"#f272c8"}/>
          </div>
          <Footer/>
          
        </div>
      </main>
    </>
  );
}

export default App;
