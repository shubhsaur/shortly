import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const resultRef = useRef(null);
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />
      <Hero />
      <Shorten ref={resultRef} />
      <Stats />
      <Boost resultRef={resultRef} />
      <Footer />
    </div>
  );
}

export default App;
