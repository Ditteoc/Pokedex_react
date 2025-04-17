import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="tw-app-wrapper">
        <main className="tw-main">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;