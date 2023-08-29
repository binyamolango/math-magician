import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <header className="header">
      <h1 className="title">Math Magicians</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/Calculator" className="nav-link">Calculator</Link></li>
          <li className="nav-item"><Link to="/Quotes" className="nav-link">Quote</Link></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default NavBar;
