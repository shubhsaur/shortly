import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
