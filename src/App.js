import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";

function App() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />
      <Hero />
      <Shorten />
    </div>
  );
}

export default App;
