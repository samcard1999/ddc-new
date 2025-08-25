import "./App.css";
import About from "./components/About";
import About2 from "./components/About2";
import About3 from "./components/About3";
import About4 from "./components/About4";
import Header from "./components/Header";
import Hero from "./components/Hero";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import ProjectsCard from "./components/Projects/ProjectsCard";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies";
import useWhatsappScrollEffect from "./components/Hooks/useWhatsappScrollEffect";
import WhatsappButton from "./components/Contact/WhatsappButton";
import Footer from "./components/Footer";

function App() {
  const lenisRef = useRef();
  const whatsappRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 700);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useWhatsappScrollEffect(whatsappRef, containerRef);

  return (
    <div ref={containerRef}>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <WhatsappButton ref={whatsappRef} />
      <Header />
      <Hero />
      <About />
      <About2 />
      <About3 />
      <ProjectsCard />
      <Projects />
      {/* <Technologies /> */}
      <Footer />
    </div>
  );
}

export default App;
