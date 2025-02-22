import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Pet Management System</Link>
      </div>
      <div className="navbar-links">
        <Link to="/add-pet">Add Pet</Link>
        <Link to="/pets">Pets</Link>
      </div>
    </nav>
  );
}

export default Navbar;