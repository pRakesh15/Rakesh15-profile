import "./App.css";
import BackCanvas from "./components/activity/StarCanvas";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Projects";
import { Experience } from "./components/main/Experience";
import Footer from "./components/subComponent/Footer";
import { GoogleGeminiEffectDemo } from "./components/subComponent/GoogleGeminiEffectDemo";

function App() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col  gap-20">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <BackCanvas points={350} color={"#E60E40"} />
          </div>
          <div className="relative z-0">
            <About />
          </div>
          <div className="relative z-0">
            <Projects />
          </div>
          <div>
          <Experience />
        </div>
          <div className="relative z-0">
            <GoogleGeminiEffectDemo/>
          </div>
          <div >
            <Contact/>
          </div>
         

          {/* make the footer the dock icon for which i can dock the icons from acertinity */}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
