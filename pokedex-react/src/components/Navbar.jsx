import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="tw-navbar-wrapper">
      <div className="tw-navbar">
        <h1 className="tw-title">Pokémon</h1>
        <ul className="tw-nav-links">
          <li><Link to="/" className="hover:underline">Pokédex</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
