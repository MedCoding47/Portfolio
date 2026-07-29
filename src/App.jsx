import { useState, useEffect } from "react";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
import { useContext } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Header from "./components/Header/Header";
import Hero from "./containers/Hero/Hero";
import About from "./containers/About/About";
import Experience from "./containers/Experience/Experience";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";
import Education from "./containers/Education/Education";
import Contact from "./containers/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ScrollProgress, Marquee } from "./components/Animated/Animated";
import "./App.scss";

function AppContent() {
  const { isDark } = useContext(ThemeContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [splashDone, setSplashDone] = useState(
    () => sessionStorage.getItem("splashDone") === "true"
  );

  const handleSplashFinish = () => {
    sessionStorage.setItem("splashDone", "true");
    setSplashDone(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={handleSplashFinish} />}
      <ScrollProgress />
      <div className={`app ${isDark ? "app--dark" : ""}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Marquee text="React • TypeScript • .NET • Node.js • Python • Docker • Angular • SQL • MongoDB • AWS • " />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop visible={showScrollTop} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
