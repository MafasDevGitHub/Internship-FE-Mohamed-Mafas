import { Link } from "react-router-dom";
import "../style/Navbar.css"

const Navbar = () => {

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          Eight25
        </div>
        <ul className="navbar-link">
          <li><Link to="/journey">Journey</Link></li>
          <li><Link to="/auto">AI Driven</Link></li>
          <li><Link to="/ranked">Ranked Content</Link></li>
        </ul>
      </nav>
    </div>
  );
};


export default Navbar;