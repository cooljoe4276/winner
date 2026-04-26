import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { navigation } from "./data";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader active={loading} />
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar items={navigation} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          <Certificates />
          <Vision />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
